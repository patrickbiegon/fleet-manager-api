using PartnerRiskManager.DTOs;
using PartnerRiskManager.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PartnerRiskManager.Services
{
    public interface IPartnerService : IService<Partner>
    {
        Task<IEnumerable<Partner>> GetAllAssignedAsync();
        Task<IEnumerable<Partner>> GetAllUnassignedAsync();
        Task<List<Partner>> AddAsync(List<Partner> partners);
        Task<PaginationDto<Partner>> SearchPartners(string str, int page, int pageSize);
        Task<PaginationDto<Partner>> GetPartnersByPageAsync(int page, int pageSize);
    }
}
