using PartnerRiskManager.DTOs;
using PartnerRiskManager.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PartnerRiskManager.Services
{
    public interface IGeneralInformationService : IService<GeneralInformation>
    {
        Task<IEnumerable<GeneralInformation>> GetAllAssignedAsync();
        Task<IEnumerable<GeneralInformation>> GetAllUnassignedAsync();
        Task<List<GeneralInformation>> AddAsync(List<GeneralInformation> GeneralInformations);
        Task<PaginationDto<GeneralInformation>> SearchGeneralInformations(string str, int page, int pageSize);
        Task<PaginationDto<GeneralInformation>> GetGeneralInformationsByPageAsync(int page, int pageSize);
    }
}
