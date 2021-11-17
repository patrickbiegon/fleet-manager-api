﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeManager.Models
{
    public class Ticket
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public ApplicationUser User { get; set; }

        [Required]
        public Car Car { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string Title { get; set; }

        [Column(TypeName = "varchar(150)")]
        public string ImagePath { get; set; }

        [Column(TypeName = "varchar(max)")]
        public string Details { get; set; }

        [Required]
        public DateTime Date { get; set; }

        [Required]
        public TicketType Type { get; set; }

        [Required]
        [Column(TypeName = "varchar(20)")]
        public string Status { get; set; }
    }
}
