﻿using Microsoft.AspNetCore.Identity;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PartnerRiskManager.Models
{
    public class ApplicationUser : IdentityUser
    {
        [Column(TypeName = "varchar(30)")]
        public string FirstName { get; set; }
        [Column(TypeName = "varchar(30)")]
        public string LastName { get; set; }
        [Column(TypeName = "char(13)")]
        public string CNP { get; set; }
        [Column(TypeName = "varchar(100)")]
        public string Adress { get; set; }
        public Partner Partner { get; set; }
        public string ImgName { get; set; }
        public string ImgSrc { get; set; }
        public DateTime JoinDate { get; set; }
        [MaxLength(256)]
        public string UnConfirmedEmail { get; set; }
    }
}