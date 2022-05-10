using PartnerRiskManager.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PartnerRiskManager.Services
{
    public interface IReputationalRiskAssessmentService : IService<ReputationalRiskAssessment>
    {
        Task<IEnumerable<ReputationalRiskAssessment>> GetAllForPartner(int id);
    }
}
