using PartnerRiskManager.Data;
using PartnerRiskManager.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PartnerRiskManager.Services
{
    public class ShortAssessmentService : IShortAssessmentService
    {
        private readonly ApplicationDbContext _db;

        public ShortAssessmentService(ApplicationDbContext db)
        {
            _db = db;
        }

        public async Task<ShortAssessment> AddAsync(ShortAssessment ShortAssessment)
        {
            await _db.ShortAssessments.AddAsync(ShortAssessment);
            await _db.SaveChangesAsync();
            return ShortAssessment;
        }

        public async Task<IEnumerable<ShortAssessment>> GetAllAsync()
        {
            return await _db.ShortAssessments
                .Include(h => h.Partner)
                .ToListAsync();
        }

        public async Task<IEnumerable<ShortAssessment>> GetAllForPartner(int id)
        {
            return await _db.ShortAssessments
                .Where(h => h.PartnerId == id)
                .Include(h => h.Partner)
                .ToListAsync();
        }



        public async Task<ShortAssessment> GetAsync(int id)
        {
            return await _db.ShortAssessments.FindAsync(id);
        }

        public async Task RemoveAsync(int id)
        {
            _db.ShortAssessments.Remove(await GetAsync(id));
            await _db.SaveChangesAsync();
        }

        public async Task<ShortAssessment> UpdateAsync(ShortAssessment ShortAssessment)
        {
            var ShortAssessmentToUpdate = await GetAsync(ShortAssessment.Id);
            ShortAssessmentToUpdate.PartnerId = ShortAssessment.PartnerId;
            ShortAssessmentToUpdate.PriorUNExperience = ShortAssessment.PriorUNExperience;
            ShortAssessmentToUpdate.TechnicalSkillsMatch = ShortAssessment.TechnicalSkillsMatch;
            ShortAssessmentToUpdate.SpecifySkills = ShortAssessment.SpecifySkills;
            ShortAssessmentToUpdate.AuditReportsPublic = ShortAssessment.AuditReportsPublic;
            ShortAssessmentToUpdate.AnnualTurnoverBudget = ShortAssessment.AnnualTurnoverBudget;
            ShortAssessmentToUpdate.FinancialDeficiencies = ShortAssessment.FinancialDeficiencies;
            ShortAssessmentToUpdate.NonCompliance = ShortAssessment.NonCompliance;


            await _db.SaveChangesAsync();

            return ShortAssessmentToUpdate;
        }
    }
}
