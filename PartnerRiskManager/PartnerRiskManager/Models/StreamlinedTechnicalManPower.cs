using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PartnerRiskManager.Models
{
    public class StreamlinedTechnicalManPower
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public string PermanentStaff { get; set; }
        public string OtherStaffing { get; set; }
        public int Year { get; set; }
        public string Overall { get; set; }
        public string RelevantField { get; set; }
        public int PartnerId { get; set; }
        public Partner Partner { get; set; }
    }

}
