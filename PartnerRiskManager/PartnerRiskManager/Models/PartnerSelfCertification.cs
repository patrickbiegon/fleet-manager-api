using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PartnerRiskManager.Models
{
    public class PartnerSelfCertification
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public bool NotIncludedInExclusionaryCriteria { get; set; } = true;

        [Column(TypeName = "varchar(500)")]
        public string Remarks { get; set; }

        [Column(TypeName = "varchar(150)")]
        public string RepresentativeName { get; set; } = string.Empty;

        [Column(TypeName = "varchar(150)")]
        public string RepresentativeTitle { get; set; } = string.Empty;

        public bool Signature { get; set; }

        public DateTime Date { get; set; }

        public int PartnerId { get; set; }

        public Partner Partner { get; set; }
    }

}
