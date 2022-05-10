﻿using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PartnerRiskManager.Models
{
    public class Partner
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Column(TypeName = "varchar(150)")]
        public string ImagePath { get; set; }

        [Required]
        [Column(TypeName = "varchar(10)")]
        public string LicencePlate { get; set; }

        [Required]
        [Column(TypeName = "varchar(17)")]
        public string ChassisSeries { get; set; }

        [Required]
        [Column(TypeName = "varchar(30)")]
        public string Brand { get; set; }

        [Required]
        [Column(TypeName = "varchar(30)")]
        public string Model { get; set; }

        [Required]
        public DateTime FirstRegistrationDate { get; set; }

        [Required]
        [Column(TypeName = "varchar(30)")]
        public string Color { get; set; }

        [Required]
        public int Mileage { get; set; }

        public string UserId { get; set; }

        public ApplicationUser User { get; set; }
    }
}
