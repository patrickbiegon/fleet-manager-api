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
    public class ExclusionaryCriteriaController : Controller
    {
        private readonly IExclusionaryCriteriaService _ExclusionaryCriteriaService;
        private readonly ITicketService _ticketService;
        private readonly ILogger<ExclusionaryCriteriaController> _logger;

        public ExclusionaryCriteriaController(ILogger<ExclusionaryCriteriaController> logger, IExclusionaryCriteriaService ExclusionaryCriteriaService, ITicketService ticketService)
        {
            _ExclusionaryCriteriaService = ExclusionaryCriteriaService;
            _ticketService = ticketService;
            _logger = logger;
        }

        [Authorize(Roles = "Admin")]
        [HttpGet("ExclusionaryCriteria")]
        public async Task<IEnumerable<ExclusionaryCriteria>> GetAllExclusionaryCriteriaAsync()
        {
            var histories = await _ExclusionaryCriteriaService.GetAllAsync();
            _logger.LogInformation("All partners histories retrieved");
            return histories;
        }

        [HttpGet("/api/partners/{partnerId}/ExclusionaryCriteria")]
        public async Task<IEnumerable<ExclusionaryCriteria>> GetAllForPartnerAsync(int partnerId)
        {
            var histories = await _ExclusionaryCriteriaService.GetAllForPartner(partnerId);
            _logger.LogInformation($"ExclusionaryCriteria for partner with id {partnerId} retrieved");
            return histories;
        }


        [HttpGet("ExclusionaryCriteria/{id}")]
        public async Task<ExclusionaryCriteria> GetExclusionaryCriteriaAsync(int id)
        {
            var ExclusionaryCriteria = await _ExclusionaryCriteriaService.GetAsync(id);
            _logger.LogInformation($"ExclusionaryCriteria with id {id} retrieved");
            return ExclusionaryCriteria;
        }

        [Authorize(Roles = "Admin")]
        [HttpPost("{id}/ExclusionaryCriteria")]
        public async Task<IActionResult> AddExclusionaryCriteriaAsync(int id, [FromBody] ExclusionaryCriteriaDto ExclusionaryCriteriaDto)
        {
         
                var ExclusionaryCriteria = new ExclusionaryCriteria()
                {
                    AdverseAppearances = ExclusionaryCriteriaDto.AdverseAppearances,
                    CoreWeapons = ExclusionaryCriteriaDto.CoreWeapons,
                    ControversialWeapons = ExclusionaryCriteriaDto.ControversialWeapons,
                    TobaccoManufacturers = ExclusionaryCriteriaDto.TobaccoManufacturers,
                    HumanRightsAbuses = ExclusionaryCriteriaDto.HumanRightsAbuses,
                    NoCommitmentToUNPrinciples = ExclusionaryCriteriaDto.NoCommitmentToUNPrinciples,
                    UNGlobalCompact = ExclusionaryCriteriaDto.UNGlobalCompact,
                   
                };

                await _ExclusionaryCriteriaService.AddAsync(ExclusionaryCriteria);
                _logger.LogInformation($"ExclusionaryCriteria added for partner with id {id}");
                return Ok();
            
        }

        [Authorize(Roles = "Admin")]
        [HttpPut("{id}/ExclusionaryCriteria")]
        public async Task<ExclusionaryCriteria> UpdateExclusionaryCriteriaAsync(int id, [FromBody] ExclusionaryCriteria ExclusionaryCriteria)
        {
            var ExclusionaryCriteriaResult = await _ExclusionaryCriteriaService.UpdateAsync(ExclusionaryCriteria);
            _logger.LogInformation($"ExclusionaryCriteria with id {id} retrieved");
            return ExclusionaryCriteriaResult;
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}/ExclusionaryCriteria")]
        public async Task<ActionResult> DeleteExclusionaryCriteriaAsync(int id)
        {
            await _ExclusionaryCriteriaService.RemoveAsync(id);
            _logger.LogInformation($"ExclusionaryCriteria with id {id} retrieved");
            return Ok();
        }
    }
}
