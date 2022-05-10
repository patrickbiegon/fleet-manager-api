using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PartnerRiskManager.Models
{
    public class Ticket
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        public string UserId { get; set; }

        public ApplicationUser User { get; set; }

        [Required]
        public int PartnerId { get; set; }
        public Partner Partner { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string Title { get; set; }

        [Column(TypeName = "varchar(150)")]
        public string ImagePath { get; set; }

        [Column(TypeName = "varchar(max)")]
        public string Details { get; set; }

        [Required]
        [Column(TypeName = "decimal(18,2)")]
        public decimal Cost { get; set; }
        [Required]
        public DateTime Date { get; set; }

        [Required]
        public TicketType Type { get; set; }

        [Required]
        public int MileageAtSubmit { get; set; }

        [Required]
        public StatusType Status { get; set; }
    }
}
