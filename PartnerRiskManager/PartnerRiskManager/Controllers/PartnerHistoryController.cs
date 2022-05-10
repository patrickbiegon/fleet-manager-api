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
    public class PartnerHistoryController : Controller
    {
        private readonly IPartnerHistoryService _partnerHistoryService;
        private readonly ITicketService _ticketService;
        private readonly ILogger<PartnerHistoryController> _logger;

        public PartnerHistoryController(ILogger<PartnerHistoryController> logger, IPartnerHistoryService partnerHistoryService, ITicketService ticketService)
        {
            _partnerHistoryService = partnerHistoryService;
            _ticketService = ticketService;
            _logger = logger;
        }

        
        [HttpGet("history")]
        public async Task<IEnumerable<PartnerHistory>> GetAllHistoryAsync()
        {
            var histories = await _partnerHistoryService.GetAllAsync();
            _logger.LogInformation("All partners histories retrieved");
            return histories;
        }

        [HttpGet("/api/partners/{partnerId}/history")]
        public async Task<IEnumerable<PartnerHistory>> GetAllForPartnerAsync(int partnerId)
        {
            var histories = await _partnerHistoryService.GetAllForPartner(partnerId);
            _logger.LogInformation($"History for partner with id {partnerId} retrieved");
            return histories;
        }

        [HttpGet("/api/users/{userId}/history")]
        public async Task<IEnumerable<PartnerHistory>> GetAllForUserAsync(string userId)
        {
            var histories = await _partnerHistoryService.GetAllForUser(userId);
            _logger.LogInformation($"History for user with id {userId} retrieved");
            return histories;
        }

        [HttpGet("history/{id}")]
        public async Task<PartnerHistory> GetHistoryAsync(int id)
        {
            var history = await _partnerHistoryService.GetAsync(id);
            _logger.LogInformation($"History with id {id} retrieved");
            return history;
        }

        
        [HttpPost("{id}/history")]
        public async Task<IActionResult> AddPartnerHistoryAsync(int id, [FromBody] HistoryDto historyDto)
        {
            var ticket = await _ticketService.GetAsync(historyDto.TicketId);
            ticket.Status = (StatusType)historyDto.Status;
            await _ticketService.UpdateAsync(ticket);

            if (ticket.Status == StatusType.Solved)
            {
                var partnerHistory = new PartnerHistory()
                {
                    Title = historyDto.Title,
                    Details = historyDto.Details,
                    AdminId = historyDto.AdminId,
                    UserId = historyDto.UserId,
                    TicketId = historyDto.TicketId,
                    ImagePath = historyDto.ImagePath,
                    PartnerId = historyDto.PartnerId,
                    MileageAtExecution = historyDto.MileageAtExecution,
                    ExecutionDate = historyDto.ExecutionDate,
                    RenewDate = historyDto.RenewDate,
                    Cost = historyDto.Cost,
                    IsPayed = historyDto.IsPayed,
                    ServiceType = (TicketType)historyDto.ServiceType
                };

                await _partnerHistoryService.AddAsync(partnerHistory);
                _logger.LogInformation($"History added for partner with id {id}");
                return Ok();
            }
            else
            {
                _logger.LogInformation($"Ticket {ticket.Id} status modified, history not added");
                return Ok();
            }
        }

        
        [HttpPut("{id}/history")]
        public async Task<PartnerHistory> UpdatePartnerHistoryAsync(int id, [FromBody] PartnerHistory partnerHistory)
        {
            var history = await _partnerHistoryService.UpdateAsync(partnerHistory);
            _logger.LogInformation($"History with id {id} retrieved");
            return history;
        }

        
        [HttpDelete("{id}/history")]
        public async Task<ActionResult> DeletePartnerHistoryAsync(int id)
        {
            await _partnerHistoryService.RemoveAsync(id);
            _logger.LogInformation($"History with id {id} retrieved");
            return Ok();
        }
    }
}
