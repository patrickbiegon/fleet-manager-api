using PartnerRiskManager.Data;
using PartnerRiskManager.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PartnerRiskManager.Services
{
    public class ExclusionaryCriteriaService : IExclusionaryCriteriaService
    {
        private readonly ApplicationDbContext _db;

        public ExclusionaryCriteriaService(ApplicationDbContext db)
        {
            _db = db;
        }

        public async Task<ExclusionaryCriteria> AddAsync(ExclusionaryCriteria ExclusionaryCriteria)
        {
            await _db.ExclusionaryCriterias.AddAsync(ExclusionaryCriteria);
            await _db.SaveChangesAsync();
            return ExclusionaryCriteria;
        }

        public async Task<IEnumerable<ExclusionaryCriteria>> GetAllAsync()
        {
            return await _db.ExclusionaryCriterias
                .Include(h => h.Partner)
                .ToListAsync();
        }

        public async Task<IEnumerable<ExclusionaryCriteria>> GetAllForPartner(int id)
        {
            return await _db.ExclusionaryCriterias
                .Where(h => h.PartnerId == id)
                .Include(h => h.Partner)
                .ToListAsync();
        }



        public async Task<ExclusionaryCriteria> GetAsync(int id)
        {
            return await _db.ExclusionaryCriterias.FindAsync(id);
        }

        public async Task RemoveAsync(int id)
        {
            _db.ExclusionaryCriterias.Remove(await GetAsync(id));
            await _db.SaveChangesAsync();
        }

        public async Task<ExclusionaryCriteria> UpdateAsync(ExclusionaryCriteria ExclusionaryCriteria)
        {
            var exclusionaryCriteriaToUpdate = await GetAsync(ExclusionaryCriteria.Id);
            exclusionaryCriteriaToUpdate.PartnerId = ExclusionaryCriteria.PartnerId;
            exclusionaryCriteriaToUpdate.AdverseAppearances = ExclusionaryCriteria.AdverseAppearances;
            exclusionaryCriteriaToUpdate.CoreWeapons = ExclusionaryCriteria.CoreWeapons;
            exclusionaryCriteriaToUpdate.ControversialWeapons = ExclusionaryCriteria.ControversialWeapons;
            exclusionaryCriteriaToUpdate.TobaccoManufacturers = ExclusionaryCriteria.TobaccoManufacturers;
            exclusionaryCriteriaToUpdate.HumanRightsAbuses = ExclusionaryCriteria.HumanRightsAbuses;
            exclusionaryCriteriaToUpdate.NoCommitmentToUNPrinciples = ExclusionaryCriteria.NoCommitmentToUNPrinciples;
            exclusionaryCriteriaToUpdate.UNGlobalCompact = ExclusionaryCriteria.UNGlobalCompact;
            await _db.SaveChangesAsync();

            return exclusionaryCriteriaToUpdate;
        }
    }
}
