using PartnerRiskManager.Data;
using PartnerRiskManager.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PartnerRiskManager.Services
{
    public class ReputationalRiskAssessmentService : IReputationalRiskAssessmentService
    {
        private readonly ApplicationDbContext _db;

        public ReputationalRiskAssessmentService(ApplicationDbContext db)
        {
            _db = db;
        }

        public async Task<ReputationalRiskAssessment> AddAsync(ReputationalRiskAssessment ReputationalRiskAssessment)
        {
            await _db.ReputationalRiskAssessments.AddAsync(ReputationalRiskAssessment);
            await _db.SaveChangesAsync();
            return ReputationalRiskAssessment;
        }

        public async Task<IEnumerable<ReputationalRiskAssessment>> GetAllAsync()
        {
            return await _db.ReputationalRiskAssessments
                .Include(h => h.Partner)
                .ToListAsync();
        }

        public async Task<IEnumerable<ReputationalRiskAssessment>> GetAllForPartner(int id)
        {
            return await _db.ReputationalRiskAssessments
                .Where(h => h.PartnerId == id)
                .Include(h => h.Partner)
                .ToListAsync();
        }



        public async Task<ReputationalRiskAssessment> GetAsync(int id)
        {
            return await _db.ReputationalRiskAssessments.FindAsync(id);
        }

        public async Task RemoveAsync(int id)
        {
            _db.ReputationalRiskAssessments.Remove(await GetAsync(id));
            await _db.SaveChangesAsync();
        }

        public async Task<ReputationalRiskAssessment> UpdateAsync(ReputationalRiskAssessment ReputationalRiskAssessment)
        {
            var ReputationalRiskAssessmentToUpdate = await GetAsync(ReputationalRiskAssessment.Id);
            ReputationalRiskAssessmentToUpdate.PartnerId = ReputationalRiskAssessment.PartnerId;
            ReputationalRiskAssessmentToUpdate.Criticism = ReputationalRiskAssessment.Criticism;
            ReputationalRiskAssessmentToUpdate.Lawsuits = ReputationalRiskAssessment.Lawsuits;
            ReputationalRiskAssessmentToUpdate.Others = ReputationalRiskAssessment.Others;
            ReputationalRiskAssessmentToUpdate.Controversies = ReputationalRiskAssessment.Controversies;
            ReputationalRiskAssessmentToUpdate.EngagementwithUN = ReputationalRiskAssessment.EngagementwithUN;
            ReputationalRiskAssessmentToUpdate.EngagementList = ReputationalRiskAssessment.EngagementList;
            ReputationalRiskAssessmentToUpdate.PreviousHarm = ReputationalRiskAssessment.PreviousHarm;
            ReputationalRiskAssessmentToUpdate.ContributeToSDGS = ReputationalRiskAssessment.ContributeToSDGS;
            ReputationalRiskAssessmentToUpdate.Conclusion = ReputationalRiskAssessment.Conclusion;

            await _db.SaveChangesAsync();

            return ReputationalRiskAssessmentToUpdate;
        }
    }
}
