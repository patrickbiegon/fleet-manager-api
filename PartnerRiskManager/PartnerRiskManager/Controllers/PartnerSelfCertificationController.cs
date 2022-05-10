using PartnerRiskManager.Models;
using PartnerRiskManager.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using PartnerRiskManager.DTOs;
using Microsoft.AspNetCore.Authorization;

namespace PartnerRiskManager.Controllers
{
    
    [ApiController]
    [Route("api/Partners/")]
    public class PartnerSelfCertificationController : Controller
    {
        private readonly IPartnerSelfCertificationService _PartnerSelfCertificationService;
        private readonly ITicketService _ticketService;
        private readonly ILogger<PartnerSelfCertificationController> _logger;

        public PartnerSelfCertificationController(ILogger<PartnerSelfCertificationController> logger, IPartnerSelfCertificationService PartnerSelfCertificationService, ITicketService ticketService)
        {
            _PartnerSelfCertificationService = PartnerSelfCertificationService;
            _ticketService = ticketService;
            _logger = logger;
        }

        
        [HttpGet("PartnerSelfCertification")]
        public async Task<IEnumerable<PartnerSelfCertification>> GetAllPartnerSelfCertificationAsync()
        {
            var histories = await _PartnerSelfCertificationService.GetAllAsync();
            _logger.LogInformation("All partners histories retrieved");
            return histories;
        }

        [HttpGet("/api/partners/{partnerId}/PartnerSelfCertification")]
        public async Task<IEnumerable<PartnerSelfCertification>> GetAllForPartnerAsync(int partnerId)
        {
            var histories = await _PartnerSelfCertificationService.GetAllForPartner(partnerId);
            _logger.LogInformation($"PartnerSelfCertification for partner with id {partnerId} retrieved");
            return histories;
        }


        [HttpGet("PartnerSelfCertification/{id}")]
        public async Task<PartnerSelfCertification> GetPartnerSelfCertificationAsync(int id)
        {
            var PartnerSelfCertification = await _PartnerSelfCertificationService.GetAsync(id);
            _logger.LogInformation($"PartnerSelfCertification with id {id} retrieved");
            return PartnerSelfCertification;
        }

        
        [HttpPost("{id}/PartnerSelfCertification")]
        public async Task<IActionResult> AddPartnerSelfCertificationAsync(int id, [FromBody] PartnerSelfCertificationDto PartnerSelfCertificationDto)
        {
         
                var PartnerSelfCertification = new PartnerSelfCertification()
                {

                   NotIncludedInExclusionaryCriteria  = PartnerSelfCertificationDto.NotIncludedInExclusionaryCriteria,
                    Remarks = PartnerSelfCertificationDto.Remarks,
                    RepresentativeName = PartnerSelfCertificationDto.RepresentativeName,
                    RepresentativeTitle = PartnerSelfCertificationDto.RepresentativeTitle,
                    Signature = PartnerSelfCertificationDto.Signature,
                    Date = PartnerSelfCertificationDto.Date,

                };

                await _PartnerSelfCertificationService.AddAsync(PartnerSelfCertification);
                _logger.LogInformation($"PartnerSelfCertification added for partner with id {id}");
                return Ok();
            
        }

        
        [HttpPut("{id}/PartnerSelfCertification")]
        public async Task<PartnerSelfCertification> UpdatePartnerSelfCertificationAsync(int id, [FromBody] PartnerSelfCertification PartnerSelfCertification)
        {
            var PartnerSelfCertificationResult = await _PartnerSelfCertificationService.UpdateAsync(PartnerSelfCertification);
            _logger.LogInformation($"PartnerSelfCertification with id {id} retrieved");
            return PartnerSelfCertificationResult;
        }

        
        [HttpDelete("{id}/PartnerSelfCertification")]
        public async Task<ActionResult> DeletePartnerSelfCertificationAsync(int id)
        {
            await _PartnerSelfCertificationService.RemoveAsync(id);
            _logger.LogInformation($"PartnerSelfCertification with id {id} retrieved");
            return Ok();
        }
    }
}
