using PartnerRiskManager.DTOs;
using PartnerRiskManager.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PartnerRiskManager.Services
{
    public interface ITicketService : IService<Ticket>
    {
        Task<IEnumerable<Ticket>> GetAllForPartnerAsync(int id);
        Task<IEnumerable<Ticket>> GetAllForUserAsync(string id);
    }
}
