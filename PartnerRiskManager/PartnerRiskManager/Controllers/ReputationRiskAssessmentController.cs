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
    [Route("api/Partners/")]
    public class ReputationalRiskAssessmentController : Controller
    {
        private readonly IReputationalRiskAssessmentService _ReputationalRiskAssessmentService;
        private readonly ITicketService _ticketService;
        private readonly ILogger<ReputationalRiskAssessmentController> _logger;

        public ReputationalRiskAssessmentController(ILogger<ReputationalRiskAssessmentController> logger, IReputationalRiskAssessmentService ReputationalRiskAssessmentService, ITicketService ticketService)
        {
            _ReputationalRiskAssessmentService = ReputationalRiskAssessmentService;
            _ticketService = ticketService;
            _logger = logger;
        }

        [Authorize(Roles = "Admin")]
        [HttpGet("ReputationalRiskAssessment")]
        public async Task<IEnumerable<ReputationalRiskAssessment>> GetAllReputationalRiskAssessmentAsync()
        {
            var histories = await _ReputationalRiskAssessmentService.GetAllAsync();
            _logger.LogInformation("All partners histories retrieved");
            return histories;
        }

        [HttpGet("/api/partners/{partnerId}/ReputationalRiskAssessment")]
        public async Task<IEnumerable<ReputationalRiskAssessment>> GetAllForPartnerAsync(int partnerId)
        {
            var histories = await _ReputationalRiskAssessmentService.GetAllForPartner(partnerId);
            _logger.LogInformation($"ReputationalRiskAssessment for partner with id {partnerId} retrieved");
            return histories;
        }


        [HttpGet("ReputationalRiskAssessment/{id}")]
        public async Task<ReputationalRiskAssessment> GetReputationalRiskAssessmentAsync(int id)
        {
            var ReputationalRiskAssessment = await _ReputationalRiskAssessmentService.GetAsync(id);
            _logger.LogInformation($"ReputationalRiskAssessment with id {id} retrieved");
            return ReputationalRiskAssessment;
        }

        [Authorize(Roles = "Admin")]
        [HttpPost("{id}/ReputationalRiskAssessment")]
        public async Task<IActionResult> AddReputationalRiskAssessmentAsync(int id, [FromBody] ReputationalRiskAssessmentDto ReputationalRiskAssessmentDto)
        {
         
                var ReputationalRiskAssessment = new ReputationalRiskAssessment()
                {

                    Criticism = ReputationalRiskAssessmentDto.Criticism,
                    Lawsuits = ReputationalRiskAssessmentDto.Lawsuits,
                    Others = ReputationalRiskAssessmentDto.Others,
                    Controversies = ReputationalRiskAssessmentDto.Controversies,
                    EngagementwithUN = ReputationalRiskAssessmentDto.EngagementwithUN,
                    EngagementList = ReputationalRiskAssessmentDto.EngagementList,
                    PreviousHarm = ReputationalRiskAssessmentDto.PreviousHarm,
                    ContributeToSDGS = ReputationalRiskAssessmentDto.ContributeToSDGS,
                    Conclusion = ReputationalRiskAssessmentDto.Conclusion,

                };

                await _ReputationalRiskAssessmentService.AddAsync(ReputationalRiskAssessment);
                _logger.LogInformation($"ReputationalRiskAssessment added for partner with id {id}");
                return Ok();
            
        }

        [Authorize(Roles = "Admin")]
        [HttpPut("{id}/ReputationalRiskAssessment")]
        public async Task<ReputationalRiskAssessment> UpdateReputationalRiskAssessmentAsync(int id, [FromBody] ReputationalRiskAssessment ReputationalRiskAssessment)
        {
            var ReputationalRiskAssessmentResult = await _ReputationalRiskAssessmentService.UpdateAsync(ReputationalRiskAssessment);
            _logger.LogInformation($"ReputationalRiskAssessment with id {id} retrieved");
            return ReputationalRiskAssessmentResult;
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}/ReputationalRiskAssessment")]
        public async Task<ActionResult> DeleteReputationalRiskAssessmentAsync(int id)
        {
            await _ReputationalRiskAssessmentService.RemoveAsync(id);
            _logger.LogInformation($"ReputationalRiskAssessment with id {id} retrieved");
            return Ok();
        }
    }
}
