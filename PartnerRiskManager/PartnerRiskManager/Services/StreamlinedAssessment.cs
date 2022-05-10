using PartnerRiskManager.Data;
using PartnerRiskManager.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PartnerRiskManager.Services
{
    public class StreamlinedAssessmentService : IStreamlinedAssessment
    {
        private readonly ApplicationDbContext _db;

        public StreamlinedAssessmentService(ApplicationDbContext db)
        {
            _db = db;
        }

        public async Task<StreamlinedAssessment> AddAsync(StreamlinedAssessment StreamlinedAssessment)
        {
            await _db.StreamlinedAssessments.AddAsync(StreamlinedAssessment);
            await _db.SaveChangesAsync();
            return StreamlinedAssessment;
        }

        public async Task<IEnumerable<StreamlinedAssessment>> GetAllAsync()
        {
            return await _db.StreamlinedAssessments
                .Include(h => h.Partner)
                .ToListAsync();
        }

        public async Task<IEnumerable<StreamlinedAssessment>> GetAllForPartner(int id)
        {
            return await _db.StreamlinedAssessments
                .Where(h => h.PartnerId == id)
                .Include(h => h.Partner)
                .ToListAsync();
        }



        public async Task<StreamlinedAssessment> GetAsync(int id)
        {
            return await _db.StreamlinedAssessments.FindAsync(id);
        }

        public async Task RemoveAsync(int id)
        {
            _db.StreamlinedAssessments.Remove(await GetAsync(id));
            await _db.SaveChangesAsync();
        }

        public async Task<StreamlinedAssessment> UpdateAsync(StreamlinedAssessment StreamlinedAssessment)
        {
            var StreamlinedAssessmentToUpdate = await GetAsync(StreamlinedAssessment.Id);
            StreamlinedAssessmentToUpdate.PartnerId = StreamlinedAssessment.PartnerId;

            StreamlinedAssessmentToUpdate.PriorExperience = StreamlinedAssessment.PriorExperience;
            StreamlinedAssessmentToUpdate.TechnicalAssistanceProjects = StreamlinedAssessment.TechnicalAssistanceProjects;
            StreamlinedAssessmentToUpdate.TechnicalSkillsExperienceMatch = StreamlinedAssessment.TechnicalSkillsExperienceMatch;
            StreamlinedAssessmentToUpdate.AnnualTurnover = StreamlinedAssessment.AnnualTurnover;
            StreamlinedAssessmentToUpdate.PercAnnualTurnover = StreamlinedAssessment.PercAnnualTurnover;
            StreamlinedAssessmentToUpdate.FinancialFraudCorruption = StreamlinedAssessment.FinancialFraudCorruption;
            StreamlinedAssessmentToUpdate.InsolvencyWindingUp = StreamlinedAssessment.InsolvencyWindingUp;
            StreamlinedAssessmentToUpdate.PublicExternalAudit = StreamlinedAssessment.PublicExternalAudit;
            StreamlinedAssessmentToUpdate.GAAP = StreamlinedAssessment.GAAP;
            StreamlinedAssessmentToUpdate.AnyUnqualifiedAudit = StreamlinedAssessment.AnyUnqualifiedAudit;
            StreamlinedAssessmentToUpdate.MemberIndustryassociation = StreamlinedAssessment.MemberIndustryassociation;
            StreamlinedAssessmentToUpdate.HasRelevantAccreditations = StreamlinedAssessment.HasRelevantAccreditations;
            StreamlinedAssessmentToUpdate.AccreditationName = StreamlinedAssessment.AccreditationName;



            await _db.SaveChangesAsync();

            return StreamlinedAssessmentToUpdate;
        }
    }
}
