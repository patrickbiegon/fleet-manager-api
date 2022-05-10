using System;
using System.ComponentModel.DataAnnotations;

namespace PartnerRiskManager.DTOs
{
    public class UNStreamlinedReferenceDto
    {
        public int Id { get; set; }
        public DateTime EngagementDate { get; set; }
        public string ProjectTitle { get; set; }
        public int GrantedAmount { get; set; }
        public string FounderName { get; set; }

    }
}
