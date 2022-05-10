using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PartnerRiskManager.Models
{
    public class ShortAssessment
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public bool PriorUNExperience { get; set; }
        public bool TechnicalSkillsMatch { get; set; }
        public string SpecifySkills { get; set; }
        public string AnnualTurnoverBudget { get; set; }
        public bool AuditReportsPublic { get; set; }
        public bool FinancialDeficiencies { get; set; }
        public bool NonCompliance { get; set; }

        public int PartnerId { get; set; }

        public Partner Partner { get; set; }

    }

}
