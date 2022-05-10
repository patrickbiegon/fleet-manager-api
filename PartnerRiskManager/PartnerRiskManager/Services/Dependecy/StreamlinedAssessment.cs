using PartnerRiskManager.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PartnerRiskManager.Services
{
    public interface IStreamlinedAssessment : IService<StreamlinedAssessment>
    {
        Task<IEnumerable<StreamlinedAssessment>> GetAllForPartner(int id);
    }
}
