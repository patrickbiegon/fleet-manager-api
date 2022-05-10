using PartnerRiskManager.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PartnerRiskManager.Services
{
    public interface IPartnerHistoryService : IService<PartnerHistory>
    {
        Task<IEnumerable<PartnerHistory>> GetAllForPartner(int id);
        Task<IEnumerable<PartnerHistory>> GetAllForUser(string id);
    }
}
