using System;
using System.ComponentModel.DataAnnotations;

namespace PartnerRiskManager.DTOs
{
    public class ReputationalRiskAssessmentDto
    {
        public int Id { get; set; }

        public bool Criticism { get; set; }
        public bool Demonstrations { get; set; }
        public bool Lawsuits { get; set; }
        public bool Others { get; set; }
        public string Controversies { get; set; }

        public bool EngagementwithUN { get; set; }

        public string EngagementList
        { get; set; }
        public bool PreviousHarm
        { get; set; }
        public bool ContributeToSDGS
        { get; set; }
        public string Conclusion
        { get; set; }


    }
}
