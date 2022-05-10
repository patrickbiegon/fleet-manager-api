using PartnerRiskManager.Data;
using PartnerRiskManager.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PartnerRiskManager.Services
{
    public class StreamlinedTechnicalManPowerService : IStreamlinedTechnicalManPower
    {
        private readonly ApplicationDbContext _db;

        public StreamlinedTechnicalManPowerService(ApplicationDbContext db)
        {
            _db = db;
        }

        public async Task<StreamlinedTechnicalManPower> AddAsync(StreamlinedTechnicalManPower StreamlinedTechnicalManPower)
        {
            await _db.StreamlinedTechnicalManPowers.AddAsync(StreamlinedTechnicalManPower);
            await _db.SaveChangesAsync();
            return StreamlinedTechnicalManPower;
        }

        public async Task<IEnumerable<StreamlinedTechnicalManPower>> GetAllAsync()
        {
            return await _db.StreamlinedTechnicalManPowers
                .Include(h => h.Partner)
                .ToListAsync();
        }

        public async Task<IEnumerable<StreamlinedTechnicalManPower>> GetAllForPartner(int id)
        {
            return await _db.StreamlinedTechnicalManPowers
                .Where(h => h.PartnerId == id)
                .Include(h => h.Partner)
                .ToListAsync();
        }



        public async Task<StreamlinedTechnicalManPower> GetAsync(int id)
        {
            return await _db.StreamlinedTechnicalManPowers.FindAsync(id);
        }

        public async Task RemoveAsync(int id)
        {
            _db.StreamlinedTechnicalManPowers.Remove(await GetAsync(id));
            await _db.SaveChangesAsync();
        }

        public async Task<StreamlinedTechnicalManPower> UpdateAsync(StreamlinedTechnicalManPower StreamlinedTechnicalManPower)
        {
            var StreamlinedTechnicalManPowerToUpdate = await GetAsync(StreamlinedTechnicalManPower.Id);
            StreamlinedTechnicalManPowerToUpdate.PartnerId = StreamlinedTechnicalManPower.PartnerId;
            StreamlinedTechnicalManPowerToUpdate.PermanentStaff = StreamlinedTechnicalManPower.PermanentStaff;
            StreamlinedTechnicalManPowerToUpdate.OtherStaffing = StreamlinedTechnicalManPower.OtherStaffing;
            StreamlinedTechnicalManPowerToUpdate.Year = StreamlinedTechnicalManPower.Year;
            StreamlinedTechnicalManPowerToUpdate.Overall = StreamlinedTechnicalManPower.Overall;
            StreamlinedTechnicalManPowerToUpdate.RelevantField = StreamlinedTechnicalManPower.RelevantField;
           

            await _db.SaveChangesAsync();

            return StreamlinedTechnicalManPowerToUpdate;
        }
    }
}
