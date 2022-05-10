using PartnerRiskManager.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PartnerRiskManager.Services
{
    public interface IPartnerSelfCertificationService : IService<PartnerSelfCertification>
    {
        Task<IEnumerable<PartnerSelfCertification>> GetAllForPartner(int id);
    }
}
