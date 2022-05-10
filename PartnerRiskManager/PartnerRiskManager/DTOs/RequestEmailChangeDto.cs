using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PartnerRiskManager.DTOs
{
    public class RequestEmailChangeDto
    {
        public string UserId { get; set; }
        public string NewEmail { get; set; }
        public string Password { get; set; }
    }
}
