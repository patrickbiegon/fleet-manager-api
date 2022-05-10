using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PartnerRiskManager.DTOs
{
    public class PaginationDto<T>
    {
        public List<T> Items { get; set; } = new List<T>();
        public int TotalPages { get; set; }
        public int CurrentPage { get; set; }
    }
}
