﻿using PartnerRiskManager.Models;
using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations.Schema;

namespace PartnerRiskManager.DTOs
{
    public class UserDto
    {
        public string Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string CNP { get; set; }
        public string Adress { get; set; }
        public int PartnerId { get; set; }
        public Partner Partner { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public bool PhoneNumberConfirmed { get; set; }
        public string ImgName { get; set; }
        public IFormFile ImgFile { get; set; }
        public string ImgSrc { get; set; }

        public string Role { get; set; }
    }
}
