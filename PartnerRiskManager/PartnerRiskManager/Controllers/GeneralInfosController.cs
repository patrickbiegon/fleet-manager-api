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
    [Authorize(Roles = "Employee,Admin")]
    [ApiController]
    [Route("api/GeneralInformation/")]
    public class GeneralInformationController : Controller
    {
        private readonly IGeneralInformationService _GeneralInformationService;
        private readonly ITicketService _ticketService;
        private readonly ILogger<GeneralInformationController> _logger;

        public GeneralInformationController(ILogger<GeneralInformationController> logger, IGeneralInformationService GeneralInformationService, ITicketService ticketService)
        {
            _GeneralInformationService = GeneralInformationService;
            _ticketService = ticketService;
            _logger = logger;
        }

        [Authorize(Roles = "Admin")]
        [HttpGet("GeneralInformation")]
        public async Task<IEnumerable<GeneralInformation>> GetAllGeneralInformationAsync()
        {
            var generalInformations = await _GeneralInformationService.GetAllAsync();
            _logger.LogInformation("All GeneralInformation histories retrieved");
            return generalInformations;
        }


        [HttpGet("GeneralInformation/{id}")]
        public async Task<GeneralInformation> GetGeneralInformationAsync(int id)
        {
            var GeneralInformation = await _GeneralInformationService.GetAsync(id);
            _logger.LogInformation($"GeneralInformation with id {id} retrieved");
            return GeneralInformation;
        }

        [Authorize(Roles = "Admin")]
        [HttpPost("{id}/GeneralInformation")]
        public async Task<IActionResult> AddGeneralInformationAsync(int id, [FromBody] GeneralInformationDto GeneralInformationDto)
        {
           
                var GeneralInformation = new GeneralInformation()
                {
                    Name = GeneralInformationDto.Name,
                    Description = GeneralInformationDto.Description,
                    Address = GeneralInformationDto.Address,
                    Type = GeneralInformationDto.Type,
                    OwnershipName = GeneralInformationDto.OwnershipName,
                    AnnualTurnover = GeneralInformationDto.AnnualTurnover,
                    AnnualReportWeblink = GeneralInformationDto.AnnualReportWeblink,
                    NumberEmployees = GeneralInformationDto.NumberEmployees,
                    WebsiteTelephone = GeneralInformationDto.WebsiteTelephone,
                    IsSubsidiaryOrCountryOffice = GeneralInformationDto.IsSubsidiaryOrCountryOffice,
                    LegalRepresentative = GeneralInformationDto.LegalRepresentative,
                    Countriesregions = GeneralInformationDto.Countriesregions,
                    MainContact = GeneralInformationDto.MainContact,
                    ExpressionOfInterest= GeneralInformationDto.ExpressionOfInterest,
                    ParentEntity = GeneralInformationDto.ParentEntity,
                    YearLatestAnnualReport= GeneralInformationDto.YearLatestAnnualReport,
                };

                await _GeneralInformationService.AddAsync(GeneralInformation);
                _logger.LogInformation($"GeneralInformation added for partner with id {id}");
                return Ok();
           
        }

        [Authorize(Roles = "Admin")]
        [HttpPut("{id}/GeneralInformation")]
        public async Task<GeneralInformation> UpdateGeneralInformationAsync(int id, [FromBody] GeneralInformation GeneralInformation)
        {
            var GeneralInformationService = await _GeneralInformationService.UpdateAsync(GeneralInformation);
            _logger.LogInformation($"GeneralInformation with id {id} retrieved");
            return GeneralInformation;
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}/GeneralInformation")]
        public async Task<ActionResult> DeleteGeneralInformationAsync(int id)
        {
            await _GeneralInformationService.RemoveAsync(id);
            _logger.LogInformation($"GeneralInformation with id {id} retrieved");
            return Ok();
        }
    }
}
