using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PartnerRiskManager.Models
{
    public class UNReference
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public DateTime EngagementDate { get; set; }
        public string ProjectTitle { get; set; }
        public int GrantedAmount { get; set; }
        public string FounderName { get; set; }
        public int PartnerId { get; set; }
        public Partner Partner { get; set; }
    }

}
