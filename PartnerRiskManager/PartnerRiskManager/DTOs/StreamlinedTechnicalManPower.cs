using System;
using System.ComponentModel.DataAnnotations;

namespace PartnerRiskManager.DTOs
{
    public class StreamlinedTechnicalManPowerDto
    {
        public int Id { get; set; }
        public string PermanentStaff { get; set; }
        public string OtherStaffing { get; set; }
        public int Year { get; set; }
        public string Overall { get; set; }
        public string RelevantField { get; set; }

    }
}
