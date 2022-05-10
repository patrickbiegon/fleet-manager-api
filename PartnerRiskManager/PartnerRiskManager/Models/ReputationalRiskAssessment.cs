using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PartnerRiskManager.Models
{
    public class ReputationalRiskAssessment
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public bool Criticism { get; set; }
        public bool Demonstrations { get; set; }
        public bool Lawsuits { get; set; }
        public bool Others { get; set; }

        [Column(TypeName = "varchar(500)")]
        public string Controversies { get; set; }

        public bool EngagementwithUN { get; set; }

        [Column(TypeName = "varchar(500)")]
        public string EngagementList
        { get; set; }
        public bool PreviousHarm
        { get; set; }
        public bool ContributeToSDGS
        { get; set; }
        public string Conclusion
        { get; set; }

        public int PartnerId { get; set; }

        public Partner Partner { get; set; }
    }

}
