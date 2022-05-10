using PartnerRiskManager.Data;
using PartnerRiskManager.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PartnerRiskManager.Services
{
    public class PartnerHistoryService : IPartnerHistoryService
    {
        private readonly ApplicationDbContext _db;

        public PartnerHistoryService(ApplicationDbContext db)
        {
            _db = db;
        }

        public async Task<PartnerHistory> AddAsync(PartnerHistory partnerHistory)
        {
            await _db.PartnerHistory.AddAsync(partnerHistory);
            await _db.SaveChangesAsync();
            return partnerHistory;
        }

        public async Task<IEnumerable<PartnerHistory>> GetAllAsync()
        {
            return await _db.PartnerHistory
                .Include(h => h.Partner)
                .ToListAsync();
        }

        public async Task<IEnumerable<PartnerHistory>> GetAllForPartner(int id)
        {
            return await _db.PartnerHistory
                .Where(h => h.PartnerId == id)
                .Include(h => h.Partner)
                .ToListAsync();
        }

        public async Task<IEnumerable<PartnerHistory>> GetAllForUser(string id)
        {
            return await _db.PartnerHistory
                .Where(h => h.UserId == id)
                .Include(h => h.Partner)
                .ToListAsync();
        }


        public async Task<PartnerHistory> GetAsync(int id)
        {
            return await _db.PartnerHistory.FindAsync(id);
        }

        public async Task RemoveAsync(int id)
        {
            _db.PartnerHistory.Remove(await GetAsync(id));
            await _db.SaveChangesAsync();
        }

        public async Task<PartnerHistory> UpdateAsync(PartnerHistory partnerHistory)
        {
            var historyToUpdate = await GetAsync(partnerHistory.Id);
            historyToUpdate.PartnerId = partnerHistory.PartnerId;
            historyToUpdate.Cost = partnerHistory.Cost;
            historyToUpdate.Details = partnerHistory.Details;
            historyToUpdate.ExecutionDate = partnerHistory.ExecutionDate;
            historyToUpdate.MileageAtExecution = partnerHistory.MileageAtExecution;
            historyToUpdate.RenewDate = partnerHistory.RenewDate;
            historyToUpdate.ServiceType = partnerHistory.ServiceType;
            historyToUpdate.IsPayed = partnerHistory.IsPayed;
            await _db.SaveChangesAsync();

            return historyToUpdate;
        }
    }
}
