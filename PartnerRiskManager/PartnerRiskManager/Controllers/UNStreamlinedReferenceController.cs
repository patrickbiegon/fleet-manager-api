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
    public class UNStreamlinedReferenceController : Controller
    {
        private readonly UNStreamlinedReferenceService _UNStreamlinedReferenceService;
  
        private readonly ILogger<UNStreamlinedReferenceController> _logger;

        public UNStreamlinedReferenceController(ILogger<UNStreamlinedReferenceController> logger, UNStreamlinedReferenceService UNStreamlinedReferenceService, ITicketService ticketService)
        {
            _UNStreamlinedReferenceService = UNStreamlinedReferenceService;
            
            _logger = logger;
        }

        [Authorize(Roles = "Admin")]
        [HttpGet("UNStreamlinedReference")]
        public async Task<IEnumerable<UNStreamlinedReference>> GetAllUNStreamlinedReferenceAsync()
        {
            var histories = await _UNStreamlinedReferenceService.GetAllAsync();
            _logger.LogInformation("All partners histories retrieved");
            return histories;
        }

        [HttpGet("/api/partners/{partnerId}/UNStreamlinedReference")]
        public async Task<IEnumerable<UNStreamlinedReference>> GetAllForPartnerAsync(int partnerId)
        {
            var histories = await _UNStreamlinedReferenceService.GetAllForPartner(partnerId);
            _logger.LogInformation($"UNStreamlinedReference for partner with id {partnerId} retrieved");
            return histories;
        }


        [HttpGet("UNStreamlinedReference/{id}")]
        public async Task<UNStreamlinedReference> GetUNStreamlinedReferenceAsync(int id)
        {
            var UNStreamlinedReference = await _UNStreamlinedReferenceService.GetAsync(id);
            _logger.LogInformation($"UNStreamlinedReference with id {id} retrieved");
            return UNStreamlinedReference;
        }

        [Authorize(Roles = "Admin")]
        [HttpPost("{id}/UNStreamlinedReference")]
        public async Task<IActionResult> AddUNStreamlinedReferenceAsync(int id, [FromBody] UNStreamlinedReferenceDto UNStreamlinedReferenceDto)
        {

            var UNStreamlinedReference = new UNStreamlinedReference()
            {

                EngagementDate = UNStreamlinedReferenceDto.EngagementDate,
                ProjectTitle = UNStreamlinedReferenceDto.ProjectTitle,
                GrantedAmount = UNStreamlinedReferenceDto.GrantedAmount,
                FounderName = UNStreamlinedReferenceDto.FounderName,

            };

            await _UNStreamlinedReferenceService.AddAsync(UNStreamlinedReference);
            _logger.LogInformation($"UNStreamlinedReference added for partner with id {id}");
            return Ok();

        }

        [Authorize(Roles = "Admin")]
        [HttpPut("{id}/UNStreamlinedReference")]
        public async Task<UNStreamlinedReference> UpdateUNStreamlinedReferenceAsync(int id, [FromBody] UNStreamlinedReference UNStreamlinedReference)
        {
            var UNStreamlinedReferenceResult = await _UNStreamlinedReferenceService.UpdateAsync(UNStreamlinedReference);
            _logger.LogInformation($"UNStreamlinedReference with id {id} retrieved");
            return UNStreamlinedReferenceResult;
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}/UNStreamlinedReference")]
        public async Task<ActionResult> DeleteUNStreamlinedReferenceAsync(int id)
        {
            await _UNStreamlinedReferenceService.RemoveAsync(id);
            _logger.LogInformation($"UNStreamlinedReference with id {id} retrieved");
            return Ok();
        }
    }
}
