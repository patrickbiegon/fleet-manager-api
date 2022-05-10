using System;
using System.ComponentModel.DataAnnotations;

namespace PartnerRiskManager.DTOs
{
    public class StreamlinedAssessmentDto
    {
        public int Id { get; set; }
        public bool PriorExperience { get; set; }
        public bool TechnicalAssistanceProjects { get; set; }
        public bool TechnicalSkillsExperienceMatch { get; set; }
        public bool AnnualTurnover { get; set; }
        public bool PercAnnualTurnover { get; set; }
        public bool FinancialFraudCorruption { get; set; }
        public bool InsolvencyWindingUp { get; set; }
        public bool PublicExternalAudit { get; set; }
        public bool GAAP { get; set; }
        public bool AnyUnqualifiedAudit { get; set; }
        public bool MemberIndustryassociation { get; set; }
        public bool HasRelevantAccreditations { get; set; }
        public bool AccreditationName { get; set; }
    }
}
