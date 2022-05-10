using PartnerRiskManager.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PartnerRiskManager.Services
{
    public interface IShortAssessmentService : IService<ShortAssessment>
    {
        Task<IEnumerable<ShortAssessment>> GetAllForPartner(int id);
    }
}
