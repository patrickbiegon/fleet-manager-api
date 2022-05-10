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
    public class UNReferenceController : Controller
    {
        private readonly IUNReferenceService _UNReferenceService;
        private readonly ITicketService _ticketService;
        private readonly ILogger<UNReferenceController> _logger;

        public UNReferenceController(ILogger<UNReferenceController> logger, IUNReferenceService UNReferenceService, ITicketService ticketService)
        {
            _UNReferenceService = UNReferenceService;
            _ticketService = ticketService;
            _logger = logger;
        }

        [Authorize(Roles = "Admin")]
        [HttpGet("UNReference")]
        public async Task<IEnumerable<UNReference>> GetAllUNReferenceAsync()
        {
            var histories = await _UNReferenceService.GetAllAsync();
            _logger.LogInformation("All partners histories retrieved");
            return histories;
        }

        [HttpGet("/api/partners/{partnerId}/UNReference")]
        public async Task<IEnumerable<UNReference>> GetAllForPartnerAsync(int partnerId)
        {
            var histories = await _UNReferenceService.GetAllForPartner(partnerId);
            _logger.LogInformation($"UNReference for partner with id {partnerId} retrieved");
            return histories;
        }


        [HttpGet("UNReference/{id}")]
        public async Task<UNReference> GetUNReferenceAsync(int id)
        {
            var UNReference = await _UNReferenceService.GetAsync(id);
            _logger.LogInformation($"UNReference with id {id} retrieved");
            return UNReference;
        }

        [Authorize(Roles = "Admin")]
        [HttpPost("{id}/UNReference")]
        public async Task<IActionResult> AddUNReferenceAsync(int id, [FromBody] UNReferenceDto UNReferenceDto)
        {

            var UNReference = new UNReference()
            {

                EngagementDate = UNReferenceDto.EngagementDate,
                ProjectTitle = UNReferenceDto.ProjectTitle,
                GrantedAmount = UNReferenceDto.GrantedAmount,
                FounderName = UNReferenceDto.FounderName,

            };

            await _UNReferenceService.AddAsync(UNReference);
            _logger.LogInformation($"UNReference added for partner with id {id}");
            return Ok();

        }

        [Authorize(Roles = "Admin")]
        [HttpPut("{id}/UNReference")]
        public async Task<UNReference> UpdateUNReferenceAsync(int id, [FromBody] UNReference UNReference)
        {
            var UNReferenceResult = await _UNReferenceService.UpdateAsync(UNReference);
            _logger.LogInformation($"UNReference with id {id} retrieved");
            return UNReferenceResult;
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}/UNReference")]
        public async Task<ActionResult> DeleteUNReferenceAsync(int id)
        {
            await _UNReferenceService.RemoveAsync(id);
            _logger.LogInformation($"UNReference with id {id} retrieved");
            return Ok();
        }
    }
}
