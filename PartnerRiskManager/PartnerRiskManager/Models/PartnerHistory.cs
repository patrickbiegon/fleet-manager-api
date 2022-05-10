using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PartnerRiskManager.Models
{
    public class PartnerHistory
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        public string AdminId { get; set; }

        [Required]
        public string UserId { get; set; }

        [Required]
        public int TicketId { get; set; }

        [Column(TypeName = "varchar(150)")]
        public string ImagePath { get; set; }

        [Required]
        public int PartnerId { get; set; }

        public Partner Partner { get; set; }

        [Required]
        public TicketType ServiceType { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string Title { get; set; }

        [Column(TypeName = "varchar(max)")]
        public string Details { get; set; }

        [Required]
        public DateTime ExecutionDate { get; set; }

        [Required]
        public int MileageAtExecution { get; set; }

        [Required]
        public DateTime RenewDate { get; set; }

        [Required]
        [Column(TypeName = "decimal(18,2)")]
        public decimal Cost { get; set; }

        [Required]
        public bool IsPayed { get; set; }
    }
}
