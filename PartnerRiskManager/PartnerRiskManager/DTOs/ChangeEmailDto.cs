using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PartnerRiskManager.DTOs
{
    public class ChangeEmailDto
    {
        public string UserId { get; set; }
        public string Token { get; set; }
    }
}
