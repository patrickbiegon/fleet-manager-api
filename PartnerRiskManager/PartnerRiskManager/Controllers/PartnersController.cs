using PartnerRiskManager.Data;
using PartnerRiskManager.Models;
using PartnerRiskManager.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using PartnerRiskManager.DTOs;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using System;

namespace PartnerRiskManager.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    
    public class PartnersController : Controller
    {
        private readonly ApplicationDbContext _db;

        private readonly IPartnerService _partnerService;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly ILogger<PartnersController> _logger;

        public PartnersController(ILogger<PartnersController> logger, ApplicationDbContext db, IPartnerService partnerService, UserManager<ApplicationUser> userManager)
        {
            _db = db;
            _partnerService = partnerService;
            _userManager = userManager;
            _logger = logger;
        }

        
        [HttpPost]
        public async Task<Partner> AddNewPartner(PartnerDto partnerDto)
        {
            var config = new MapperConfiguration(cfg =>
                       cfg.CreateMap<PartnerDto, Partner>()
                   );
            var mapper = new Mapper(config);
            var partner = mapper.Map<Partner>(partnerDto);

            var addedPartner = await _partnerService.AddAsync(partner);
            _logger.LogInformation("A new partner added. Id: {id}", addedPartner.Id);
            return addedPartner;
        }

        
        [HttpGet("assigned")]
        public async Task<IEnumerable<Partner>> GetAllAssigned()
        {
            var partners = await _partnerService.GetAllAssignedAsync();
            _logger.LogInformation("All partners with assigned users retrieved");
            return partners;
        }

        
        [HttpGet("unassigned")]
        public async Task<IEnumerable<Partner>> GetAllUnassigned()
        {
            var partners = await _partnerService.GetAllUnassignedAsync();
            _logger.LogInformation("All partners with no assigned users retrieved");
            return partners;
        }

        
        [HttpGet]
        public async Task<IEnumerable<Partner>> GetAll()
        {
            var partners = await _partnerService.GetAllAsync();
            _logger.LogInformation("All partners retrieved");
            return partners; 
        }

        
        [HttpGet("get-by-page")]
        public async Task<ActionResult<PaginationDto<Partner>>> GetPartnersByPage([FromQuery] int page, [FromQuery] int size)
        {
            return Ok(await _partnerService.GetPartnersByPageAsync(page, size));
        }

        [HttpGet("{id}")]
        public async Task<Partner> Get(int id)
        {
            var partner = await _partnerService.GetAsync(id);
            _logger.LogInformation("Partner with id {Id} retrieved", id);
            return partner;
        }

        
        [HttpDelete]
        public async Task<ActionResult> Remove([FromBody] int id)
        {
            var partner = await _partnerService.GetAsync(id);

            if (partner == null)
                return NotFound(new ProblemDetails { Title = "Partner Not Found" });

            await _partnerService.RemoveAsync(id);
            _logger.LogInformation("Partner with id {Id} deleted", id);
            return Ok();
        }

        
        [HttpPut("{partnerId}/assignUser/{userId}")]
        public async Task<ActionResult> AssignUser([FromRoute] int partnerId, [FromRoute] string userId)
        {
            var partner = await _partnerService.GetAsync(partnerId);

            if (partner.User != null)
                return BadRequest(new ProblemDetails { Title = "Partner already assigned" });

            var user = await _userManager.FindByIdAsync(userId);

            if (user.Partner == null)
                user.Partner = partner;
            else
                return BadRequest(new ProblemDetails { Title = "User already has a Partner" });

            partner.User = user;
            await _db.SaveChangesAsync();
            _logger.LogInformation("Partner with id {IdPartner} assigned to user with id {IdUser}", partner.Id, user.Id);
            return Ok();
        }

        
        [HttpPut("{partnerId}/dissociateUser")]
        public async Task<ActionResult> DissociateUser(int partnerId)
        {
            var partner = await _partnerService.GetAsync(partnerId);

            if (partner.User == null)
                return BadRequest(new ProblemDetails { Title = "No User is Associated with partner" });
            
            var user = await _userManager.FindByIdAsync(partner.UserId);
            partner.User = null;
            partner.UserId = null;
            user.Partner = null;
            await _db.SaveChangesAsync();
            _logger.LogInformation("Partner with id {IdPartner} removed from user with id {IdUser}", partner.Id, user.Id);
            return Ok();
        }

        
        [HttpGet("search")]
        public async Task<PaginationDto<Partner>> SearchPartners([FromQuery] string name, [FromQuery] int page, [FromQuery] int pageSize)
        {
            return await _partnerService.SearchPartners(name, page, pageSize);
        }
    }
}