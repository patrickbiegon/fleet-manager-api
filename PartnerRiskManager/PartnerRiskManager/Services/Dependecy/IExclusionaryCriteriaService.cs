using PartnerRiskManager.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PartnerRiskManager.Services
{
    public interface IExclusionaryCriteriaService : IService<ExclusionaryCriteria>
    {
        Task<IEnumerable<ExclusionaryCriteria>> GetAllForPartner(int id);
    }
}
