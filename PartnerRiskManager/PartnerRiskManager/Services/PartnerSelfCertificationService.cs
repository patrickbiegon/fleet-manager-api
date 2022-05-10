using PartnerRiskManager.Data;
using PartnerRiskManager.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PartnerRiskManager.Services
{
    public class PartnerSelfCertificationService : IPartnerSelfCertificationService
    {
        private readonly ApplicationDbContext _db;

        public PartnerSelfCertificationService(ApplicationDbContext db)
        {
            _db = db;
        }

        public async Task<PartnerSelfCertification> AddAsync(PartnerSelfCertification PartnerSelfCertification)
        {
            await _db.PartnerSelfCertifications.AddAsync(PartnerSelfCertification);
            await _db.SaveChangesAsync();
            return PartnerSelfCertification;
        }

        public async Task<IEnumerable<PartnerSelfCertification>> GetAllAsync()
        {
            return await _db.PartnerSelfCertifications
                .Include(h => h.Partner)
                .ToListAsync();
        }

        public async Task<IEnumerable<PartnerSelfCertification>> GetAllForPartner(int id)
        {
            return await _db.PartnerSelfCertifications
                .Where(h => h.PartnerId == id)
                .Include(h => h.Partner)
                .ToListAsync();
        }



        public async Task<PartnerSelfCertification> GetAsync(int id)
        {
            return await _db.PartnerSelfCertifications.FindAsync(id);
        }

        public async Task RemoveAsync(int id)
        {
            _db.PartnerSelfCertifications.Remove(await GetAsync(id));
            await _db.SaveChangesAsync();
        }

        public async Task<PartnerSelfCertification> UpdateAsync(PartnerSelfCertification PartnerSelfCertification)
        {
            var PartnerSelfCertificationToUpdate = await GetAsync(PartnerSelfCertification.Id);
            PartnerSelfCertificationToUpdate.PartnerId = PartnerSelfCertification.PartnerId;
            PartnerSelfCertificationToUpdate.NotIncludedInExclusionaryCriteria = PartnerSelfCertification.NotIncludedInExclusionaryCriteria;
            PartnerSelfCertificationToUpdate.Remarks = PartnerSelfCertification.Remarks;
            PartnerSelfCertificationToUpdate.RepresentativeName = PartnerSelfCertification.RepresentativeName;
            PartnerSelfCertificationToUpdate.RepresentativeTitle = PartnerSelfCertification.RepresentativeTitle;
            PartnerSelfCertificationToUpdate.Signature = PartnerSelfCertification.Signature;
            PartnerSelfCertificationToUpdate.Date = PartnerSelfCertification.Date;

            await _db.SaveChangesAsync();

            return PartnerSelfCertificationToUpdate;
        }
    }
}
