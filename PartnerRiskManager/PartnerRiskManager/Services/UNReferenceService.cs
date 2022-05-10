using PartnerRiskManager.Data;
using PartnerRiskManager.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PartnerRiskManager.Services
{
    public class UNReferenceService : IUNReferenceService
    {
        private readonly ApplicationDbContext _db;

        public UNReferenceService(ApplicationDbContext db)
        {
            _db = db;
        }

        public async Task<UNReference> AddAsync(UNReference UNReference)
        {
            await _db.UNReferences.AddAsync(UNReference);
            await _db.SaveChangesAsync();
            return UNReference;
        }

        public async Task<IEnumerable<UNReference>> GetAllAsync()
        {
            return await _db.UNReferences
                .Include(h => h.Partner)
                .ToListAsync();
        }

        public async Task<IEnumerable<UNReference>> GetAllForPartner(int id)
        {
            return await _db.UNReferences
                .Where(h => h.PartnerId == id)
                .Include(h => h.Partner)
                .ToListAsync();
        }



        public async Task<UNReference> GetAsync(int id)
        {
            return await _db.UNReferences.FindAsync(id);
        }

        public async Task RemoveAsync(int id)
        {
            _db.UNReferences.Remove(await GetAsync(id));
            await _db.SaveChangesAsync();
        }

        public async Task<UNReference> UpdateAsync(UNReference UNReference)
        {
            var UNReferenceToUpdate = await GetAsync(UNReference.Id);
            UNReferenceToUpdate.PartnerId = UNReference.PartnerId;
            UNReferenceToUpdate.EngagementDate = UNReference.EngagementDate;
            UNReferenceToUpdate.ProjectTitle = UNReference.ProjectTitle;
            UNReferenceToUpdate.GrantedAmount = UNReference.GrantedAmount;
            UNReferenceToUpdate.FounderName = UNReference.FounderName;

            await _db.SaveChangesAsync();

            return UNReferenceToUpdate;
        }
    }
}
