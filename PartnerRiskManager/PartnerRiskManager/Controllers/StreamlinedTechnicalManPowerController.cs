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
    public class StreamlinedTechnicalManPowerController : Controller
    {
        private readonly StreamlinedTechnicalManPowerService _StreamlinedTechnicalManPowerService;
  
        private readonly ILogger<StreamlinedTechnicalManPowerController> _logger;

        public StreamlinedTechnicalManPowerController(ILogger<StreamlinedTechnicalManPowerController> logger, StreamlinedTechnicalManPowerService StreamlinedTechnicalManPowerService, ITicketService ticketService)
        {
            _StreamlinedTechnicalManPowerService = StreamlinedTechnicalManPowerService;
            
            _logger = logger;
        }

        [Authorize(Roles = "Admin")]
        [HttpGet("StreamlinedTechnicalManPower")]
        public async Task<IEnumerable<StreamlinedTechnicalManPower>> GetAllStreamlinedTechnicalManPowerAsync()
        {
            var histories = await _StreamlinedTechnicalManPowerService.GetAllAsync();
            _logger.LogInformation("All partners histories retrieved");
            return histories;
        }

        [HttpGet("/api/partners/{partnerId}/StreamlinedTechnicalManPower")]
        public async Task<IEnumerable<StreamlinedTechnicalManPower>> GetAllForPartnerAsync(int partnerId)
        {
            var histories = await _StreamlinedTechnicalManPowerService.GetAllForPartner(partnerId);
            _logger.LogInformation($"StreamlinedTechnicalManPower for partner with id {partnerId} retrieved");
            return histories;
        }


        [HttpGet("StreamlinedTechnicalManPower/{id}")]
        public async Task<StreamlinedTechnicalManPower> GetStreamlinedTechnicalManPowerAsync(int id)
        {
            var StreamlinedTechnicalManPower = await _StreamlinedTechnicalManPowerService.GetAsync(id);
            _logger.LogInformation($"StreamlinedTechnicalManPower with id {id} retrieved");
            return StreamlinedTechnicalManPower;
        }

        [Authorize(Roles = "Admin")]
        [HttpPost("{id}/StreamlinedTechnicalManPower")]
        public async Task<IActionResult> AddStreamlinedTechnicalManPowerAsync(int id, [FromBody] StreamlinedTechnicalManPowerDto StreamlinedTechnicalManPowerDto)
        {

            var StreamlinedTechnicalManPower = new StreamlinedTechnicalManPower()
            {
                PermanentStaff = StreamlinedTechnicalManPowerDto.PermanentStaff,
                OtherStaffing = StreamlinedTechnicalManPowerDto.OtherStaffing,
                Year = StreamlinedTechnicalManPowerDto.Year,
                Overall = StreamlinedTechnicalManPowerDto.Overall,
                RelevantField = StreamlinedTechnicalManPowerDto.RelevantField,

            };

            await _StreamlinedTechnicalManPowerService.AddAsync(StreamlinedTechnicalManPower);
            _logger.LogInformation($"StreamlinedTechnicalManPower added for partner with id {id}");
            return Ok();

        }

        [Authorize(Roles = "Admin")]
        [HttpPut("{id}/StreamlinedTechnicalManPower")]
        public async Task<StreamlinedTechnicalManPower> UpdateStreamlinedTechnicalManPowerAsync(int id, [FromBody] StreamlinedTechnicalManPower StreamlinedTechnicalManPower)
        {
            var StreamlinedTechnicalManPowerResult = await _StreamlinedTechnicalManPowerService.UpdateAsync(StreamlinedTechnicalManPower);
            _logger.LogInformation($"StreamlinedTechnicalManPower with id {id} retrieved");
            return StreamlinedTechnicalManPowerResult;
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}/StreamlinedTechnicalManPower")]
        public async Task<ActionResult> DeleteStreamlinedTechnicalManPowerAsync(int id)
        {
            await _StreamlinedTechnicalManPowerService.RemoveAsync(id);
            _logger.LogInformation($"StreamlinedTechnicalManPower with id {id} retrieved");
            return Ok();
        }
    }
}
