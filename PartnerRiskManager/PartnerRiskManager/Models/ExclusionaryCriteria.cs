using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PartnerRiskManager.Models
{
    public class ExclusionaryCriteria
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public bool AdverseAppearances { get; set; }
        public bool CoreWeapons { get; set; }
        public bool ControversialWeapons { get; set; }
        public bool TobaccoManufacturers { get; set; }
        public bool HumanRightsAbuses { get; set; }
        public bool NoCommitmentToUNPrinciples { get; set; }
        public bool UNGlobalCompact { get; set; }

        public int PartnerId { get; set; }

        public Partner Partner { get; set; }
    }

}
