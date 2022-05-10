using System;
using System.ComponentModel.DataAnnotations;

namespace PartnerRiskManager.DTOs
{
    public class PartnerSelfCertificationDto
    {
        public int Id { get; set; }

        public bool NotIncludedInExclusionaryCriteria { get; set; } = true;

        public string Remarks { get; set; }

        public string RepresentativeName { get; set; } = string.Empty;

        public string RepresentativeTitle { get; set; } = string.Empty;

        public bool Signature { get; set; }

        public DateTime Date { get; set; }


    }
}
