using PartnerRiskManager.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PartnerRiskManager.Services
{
    public interface IUNStreamlinedReference : IService<UNStreamlinedReference>
    {
        Task<IEnumerable<UNStreamlinedReference>> GetAllForPartner(int id);
    }
}
