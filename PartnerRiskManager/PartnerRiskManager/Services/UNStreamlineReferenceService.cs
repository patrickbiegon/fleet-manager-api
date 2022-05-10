using PartnerRiskManager.Data;
using PartnerRiskManager.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PartnerRiskManager.Services
{
    public class UNStreamlinedReferenceService : IUNStreamlinedReference
    {
        private readonly ApplicationDbContext _db;

        public UNStreamlinedReferenceService(ApplicationDbContext db)
        {
            _db = db;
        }

        public async Task<UNStreamlinedReference> AddAsync(UNStreamlinedReference UNStreamlinedReference)
        {
            await _db.UNStreamlinedReferences.AddAsync(UNStreamlinedReference);
            await _db.SaveChangesAsync();
            return UNStreamlinedReference;
        }

        public async Task<IEnumerable<UNStreamlinedReference>> GetAllAsync()
        {
            return await _db.UNStreamlinedReferences
                .Include(h => h.Partner)
                .ToListAsync();
        }

        public async Task<IEnumerable<UNStreamlinedReference>> GetAllForPartner(int id)
        {
            return await _db.UNStreamlinedReferences
                .Where(h => h.PartnerId == id)
                .Include(h => h.Partner)
                .ToListAsync();
        }



        public async Task<UNStreamlinedReference> GetAsync(int id)
        {
            return await _db.UNStreamlinedReferences.FindAsync(id);
        }

        public async Task RemoveAsync(int id)
        {
            _db.UNStreamlinedReferences.Remove(await GetAsync(id));
            await _db.SaveChangesAsync();
        }

        public async Task<UNStreamlinedReference> UpdateAsync(UNStreamlinedReference UNStreamlinedReference)
        {
            var UNStreamlinedReferenceToUpdate = await GetAsync(UNStreamlinedReference.Id);
            UNStreamlinedReferenceToUpdate.PartnerId = UNStreamlinedReference.PartnerId;
            UNStreamlinedReferenceToUpdate.EngagementDate = UNStreamlinedReference.EngagementDate;
            UNStreamlinedReferenceToUpdate.ProjectTitle = UNStreamlinedReference.ProjectTitle;
            UNStreamlinedReferenceToUpdate.GrantedAmount = UNStreamlinedReference.GrantedAmount;
            UNStreamlinedReferenceToUpdate.FounderName = UNStreamlinedReference.FounderName;

            await _db.SaveChangesAsync();

            return UNStreamlinedReferenceToUpdate;
        }
    }
}
