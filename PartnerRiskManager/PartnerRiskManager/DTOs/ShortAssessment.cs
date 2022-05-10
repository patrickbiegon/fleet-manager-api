using System;
using System.ComponentModel.DataAnnotations;

namespace PartnerRiskManager.DTOs
{
    public class ShortAssessmentDto
    {
        public int Id { get; set; }
        public bool PriorUNExperience { get; set; }
        public bool TechnicalSkillsMatch { get; set; }
        public string SpecifySkills { get; set; }
        public string AnnualTurnoverBudget { get; set; }
        public bool AuditReportsPublic { get; set; }
        public bool FinancialDeficiencies { get; set; }
        public bool NonCompliance { get; set; }

    }
}
