using PartnerRiskManager.Data;
using PartnerRiskManager.DTOs;
using PartnerRiskManager.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PartnerRiskManager.Services
{
    public class GeneralInformationService : IGeneralInformationService
    {
        private readonly ApplicationDbContext _db;

        public GeneralInformationService(ApplicationDbContext db)
        {
            _db = db;
        }

        public async Task<GeneralInformation> AddAsync(GeneralInformation GeneralInformation)
        {
            await _db.GeneralInformations.AddAsync(GeneralInformation);
            await _db.SaveChangesAsync();

            return GeneralInformation;
        }

        public async Task<List<GeneralInformation>> AddAsync(List<GeneralInformation> GeneralInformations)
        {
            await _db.GeneralInformations.AddRangeAsync(GeneralInformations);
            await _db.SaveChangesAsync();

            return GeneralInformations;
        }

        public async Task<GeneralInformation> UpdateAsync(GeneralInformation GeneralInformation)
        {
            var GeneralInformationToUpdate = await GetAsync(GeneralInformation.Id);
            GeneralInformationToUpdate.Name = GeneralInformation.Name;
            GeneralInformationToUpdate.Description = GeneralInformation.Description;
            GeneralInformationToUpdate.LegalRepresentative = GeneralInformation.LegalRepresentative;
            GeneralInformationToUpdate.WebsiteTelephone = GeneralInformation.WebsiteTelephone;
            GeneralInformationToUpdate.AnnualReportWeblink = GeneralInformation.AnnualReportWeblink;
            GeneralInformationToUpdate.AnnualTurnover = GeneralInformation.AnnualTurnover;
            GeneralInformationToUpdate.YearLatestAnnualReport = GeneralInformation.YearLatestAnnualReport;
            GeneralInformationToUpdate.Countriesregions = GeneralInformation.Countriesregions;
            GeneralInformationToUpdate.ExpressionOfInterest = GeneralInformation.ExpressionOfInterest;
            GeneralInformationToUpdate.IsSubsidiaryOrCountryOffice = GeneralInformation.IsSubsidiaryOrCountryOffice;
            GeneralInformationToUpdate.ParentEntity = GeneralInformation.ParentEntity;
            GeneralInformationToUpdate.MainContact = GeneralInformation.MainContact;
            GeneralInformationToUpdate.OwnershipName = GeneralInformation.OwnershipName;
            GeneralInformationToUpdate.NumberEmployees = GeneralInformation.NumberEmployees;
            GeneralInformationToUpdate.PartnerId = GeneralInformation.PartnerId;

            await _db.SaveChangesAsync();

            return GeneralInformation;
        }

        public async Task<GeneralInformation> GetAsync(int id)
        {
            return await _db.GeneralInformations.Where(c => c.Id == id).Include(p => p.Partner).FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<GeneralInformation>> GetAllAsync()
        {
            return await _db.GeneralInformations.Include(p => p.Partner).ToListAsync();
        }

        public async Task<IEnumerable<GeneralInformation>> GetAllAssignedAsync()
        {
            return await _db.GeneralInformations.Where(p => p.Partner != null).Include(p => p.Partner).ToListAsync();
        }

        public async Task<IEnumerable<GeneralInformation>> GetAllUnassignedAsync()
        {
            return await _db.GeneralInformations.Where(p => p.Partner == null).Include(p => p.Partner).ToListAsync();
        }

        public async Task RemoveAsync(int id)
        {
            _db.GeneralInformations.Remove(await GetAsync(id));
            await _db.SaveChangesAsync();
        }

        public async Task<PaginationDto<GeneralInformation>> SearchGeneralInformations(string str, int page, int pageSize)
        {
            var allGeneralInformations = await _db.GeneralInformations.Include(p => p.Partner).ToListAsync();
            var GeneralInformations = new List<GeneralInformation>();
            var searchTerms = str.ToLower().Split(' ');

            foreach (var GeneralInformation in allGeneralInformations)
            {
                var isEligible = true;
               
                foreach (var term in searchTerms)
                {
                    if (!isEligible) break;
                    if (!GeneralInformation.Name.ToLower().Contains(term) && !GeneralInformation.Description.ToLower().Contains(term)) isEligible = false;
                }
                if (isEligible) GeneralInformations.Add(GeneralInformation); 
            }

            var count = GeneralInformations.Count;

            return new PaginationDto<GeneralInformation>
            {
                Items = GeneralInformations.Skip((page - 1) * pageSize).Take(pageSize).ToList(),
                TotalPages = (int)Math.Ceiling(count / (double)pageSize),
                CurrentPage = page
            };
        }

        public async Task<PaginationDto<GeneralInformation>> GetGeneralInformationsByPageAsync(int page, int pageSize)
        {
            var query = _db.GeneralInformations.Include(p => p.Partner).AsQueryable();
            var count = await query.CountAsync();
            return new PaginationDto<GeneralInformation>
            {
                Items = await query.Skip((page - 1) * pageSize).Take(pageSize).ToListAsync(),
                TotalPages = (int)Math.Ceiling(count / (double)pageSize),
                CurrentPage = page
            };
        }
    }
}