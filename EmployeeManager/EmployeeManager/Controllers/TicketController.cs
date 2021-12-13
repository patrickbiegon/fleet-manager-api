﻿using EmployeeManager.Data;
using EmployeeManager.DTOs;
using EmployeeManager.Models;
using EmployeeManager.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace EmployeeManager.Controllers
{
    public class TicketController : BaseApiController
    {
        private readonly ApplicationDbContext _db;
        private readonly ITicketService _ticketService;

        public TicketController(ApplicationDbContext db, ITicketService ticketService)
        {
            _db = db;
            _ticketService = ticketService;
        }

        /// <summary>
        /// Submit new Ticket for Admin Processing
        /// </summary>
        /// <param name="dto">Ticket DTO</param>
        /// <returns>Status Message</returns>
        [HttpPost]
        public async Task<Ticket> ProcessTicket(Ticket ticket)
        {
            return await _ticketService.AddAsync(ticket);
        }

        /// <summary>
        /// Get ONE Specific Ticket by corresponding Id
        /// </summary>
        /// <param name="ticketId">Ticket Id</param>
        /// <returns>Ticket DTO</returns>
        [HttpGet("{ticketId}")]
        public async Task<Ticket> GetTicket(int ticketId)
        {
            return await _ticketService.GetAsync(ticketId);
        }

        /// <summary>
        /// Get a List of All Tickets in Db
        /// </summary>
        /// <returns>List of Ticket DTOs</returns>
        [HttpGet]
        public async Task<IEnumerable<Ticket>> GetAllTickets()
        {
            return await _ticketService.GetAllAsync();
        }

        /// <summary>
        /// Update Specific Ticket Properties
        /// </summary>
        /// <param name="dto">Ticket DTO</param>
        /// <returns>Status Message</returns>
        [HttpPut("{id}")]
        public async Task<Ticket> UpdateTicket(Ticket ticket)
        {
            return await _ticketService.UpdateAsync(ticket);
        }

        /// <summary>
        /// Delete Ticket from Db
        /// </summary>
        /// <param name="id">Ticket Id</param>
        /// <returns>Status Message</returns>
        [HttpDelete]
        public async Task<ActionResult> DeleteTicket([FromBody] int id)
        {
            if (await _ticketService.GetAsync(id) == null)
                return NotFound();

            await _ticketService.RemoveAsync(id);
            return Ok();
        }
    }
}
