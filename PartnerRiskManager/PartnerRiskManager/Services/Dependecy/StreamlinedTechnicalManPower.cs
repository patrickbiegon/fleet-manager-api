using PartnerRiskManager.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PartnerRiskManager.Services
{
    public interface IStreamlinedTechnicalManPower : IService<StreamlinedTechnicalManPower>
    {
        Task<IEnumerable<StreamlinedTechnicalManPower>> GetAllForPartner(int id);
    }
}
