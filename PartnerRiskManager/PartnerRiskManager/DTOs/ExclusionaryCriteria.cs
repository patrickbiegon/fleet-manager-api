using System;
using System.ComponentModel.DataAnnotations;

namespace PartnerRiskManager.DTOs
{
    public class ExclusionaryCriteriaDto
    {
        public int Id { get; set; }
        public bool AdverseAppearances { get; set; }
        public bool CoreWeapons { get; set; }
        public bool ControversialWeapons { get; set; }
        public bool TobaccoManufacturers { get; set; }
        public bool HumanRightsAbuses { get; set; }
        public bool NoCommitmentToUNPrinciples { get; set; }
        public bool UNGlobalCompact { get; set; }

    }
}
