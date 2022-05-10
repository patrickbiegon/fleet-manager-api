using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PartnerRiskManager.Models
{
    public class ResetMailRequest
    {
        public string ToEmail { get; set; }
        public string UserId { get; set; }
        public string Token { get; set; }
    }
}
