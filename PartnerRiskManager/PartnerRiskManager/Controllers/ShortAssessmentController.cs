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
    public class ShortAssessmentController : Controller
    {
        private readonly IShortAssessmentService _ShortAssessmentService;
        private readonly ITicketService _ticketService;
        private readonly ILogger<ShortAssessmentController> _logger;

        public ShortAssessmentController(ILogger<ShortAssessmentController> logger, IShortAssessmentService ShortAssessmentService, ITicketService ticketService)
        {
            _ShortAssessmentService = ShortAssessmentService;
            _ticketService = ticketService;
            _logger = logger;
        }

        
        [HttpGet("ShortAssessment")]
        public async Task<IEnumerable<ShortAssessment>> GetAllShortAssessmentAsync()
        {
            var histories = await _ShortAssessmentService.GetAllAsync();
            _logger.LogInformation("All partners histories retrieved");
            return histories;
        }

        [HttpGet("/api/partners/{partnerId}/ShortAssessment")]
        public async Task<IEnumerable<ShortAssessment>> GetAllForPartnerAsync(int partnerId)
        {
            var histories = await _ShortAssessmentService.GetAllForPartner(partnerId);
            _logger.LogInformation($"ShortAssessment for partner with id {partnerId} retrieved");
            return histories;
        }


        [HttpGet("ShortAssessment/{id}")]
        public async Task<ShortAssessment> GetShortAssessmentAsync(int id)
        {
            var ShortAssessment = await _ShortAssessmentService.GetAsync(id);
            _logger.LogInformation($"ShortAssessment with id {id} retrieved");
            return ShortAssessment;
        }

        
        [HttpPost("{id}/ShortAssessment")]
        public async Task<IActionResult> AddShortAssessmentAsync(int id, [FromBody] ShortAssessmentDto ShortAssessmentDto)
        {

            var ShortAssessment = new ShortAssessment()
            {

                PriorUNExperience = ShortAssessmentDto.PriorUNExperience,
                FinancialDeficiencies = ShortAssessmentDto.FinancialDeficiencies,
                AuditReportsPublic = ShortAssessmentDto.AuditReportsPublic,
                SpecifySkills = ShortAssessmentDto.SpecifySkills,
                TechnicalSkillsMatch = ShortAssessmentDto.TechnicalSkillsMatch,
                NonCompliance = ShortAssessmentDto.NonCompliance,
                AnnualTurnoverBudget =ShortAssessmentDto.AnnualTurnoverBudget

            };

            await _ShortAssessmentService.AddAsync(ShortAssessment);
            _logger.LogInformation($"ShortAssessment added for partner with id {id}");
            return Ok();

        }

        
        [HttpPut("{id}/ShortAssessment")]
        public async Task<ShortAssessment> UpdateShortAssessmentAsync(int id, [FromBody] ShortAssessment ShortAssessment)
        {
            var ShortAssessmentResult = await _ShortAssessmentService.UpdateAsync(ShortAssessment);
            _logger.LogInformation($"ShortAssessment with id {id} retrieved");
            return ShortAssessmentResult;
        }

        
        [HttpDelete("{id}/ShortAssessment")]
        public async Task<ActionResult> DeleteShortAssessmentAsync(int id)
        {
            await _ShortAssessmentService.RemoveAsync(id);
            _logger.LogInformation($"ShortAssessment with id {id} retrieved");
            return Ok();
        }
    }
}
