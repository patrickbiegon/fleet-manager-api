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
    public class PartnerService : IPartnerService
    {
        private readonly ApplicationDbContext _db;

        public PartnerService(ApplicationDbContext db)
        {
            _db = db;
        }

        public async Task<Partner> AddAsync(Partner partner)
        {
            await _db.Partners.AddAsync(partner);
            await _db.SaveChangesAsync();

            return partner;
        }

        public async Task<List<Partner>> AddAsync(List<Partner> partners)
        {
            await _db.Partners.AddRangeAsync(partners);
            await _db.SaveChangesAsync();

            return partners;
        }

        public async Task<Partner> UpdateAsync(Partner partner)
        {
            var partnerToUpdate = await GetAsync(partner.Id);
            partnerToUpdate.Color = partner.Color;
            partnerToUpdate.Mileage = partner.Mileage;
            partnerToUpdate.LicencePlate = partnerToUpdate.LicencePlate;
            await _db.SaveChangesAsync();

            return partner;
        }

        public async Task<Partner> GetAsync(int id)
        {
            return await _db.Partners.Where(c => c.Id == id).Include(c => c.User).FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<Partner>> GetAllAsync()
        {
            return await _db.Partners.Include(c => c.User).ToListAsync();
        }

        public async Task<IEnumerable<Partner>> GetAllAssignedAsync()
        {
            return await _db.Partners.Where(c => c.User != null).Include(c => c.User).ToListAsync();
        }

        public async Task<IEnumerable<Partner>> GetAllUnassignedAsync()
        {
            return await _db.Partners.Where(c => c.User == null).Include(c => c.User).ToListAsync();
        }

        public async Task RemoveAsync(int id)
        {
            _db.Partners.Remove(await GetAsync(id));
            await _db.SaveChangesAsync();
        }

        public async Task<PaginationDto<Partner>> SearchPartners(string str, int page, int pageSize)
        {
            var allPartners = await _db.Partners.Include(c => c.User).ToListAsync();
            var partners = new List<Partner>();
            var searchTerms = str.ToLower().Split(' ');

            foreach (var partner in allPartners)
            {
                var isEligible = true;
               
                foreach (var term in searchTerms)
                {
                    if (!isEligible) break;
                    if (!partner.Brand.ToLower().Contains(term) && !partner.Model.ToLower().Contains(term)) isEligible = false;
                }
                if (isEligible) partners.Add(partner); 
            }

            var count = partners.Count;

            return new PaginationDto<Partner>
            {
                Items = partners.Skip((page - 1) * pageSize).Take(pageSize).ToList(),
                TotalPages = (int)Math.Ceiling(count / (double)pageSize),
                CurrentPage = page
            };
        }

        public async Task<PaginationDto<Partner>> GetPartnersByPageAsync(int page, int pageSize)
        {
            var query = _db.Partners.Include(c => c.User).AsQueryable();
            var count = await query.CountAsync();
            return new PaginationDto<Partner>
            {
                Items = await query.Skip((page - 1) * pageSize).Take(pageSize).ToListAsync(),
                TotalPages = (int)Math.Ceiling(count / (double)pageSize),
                CurrentPage = page
            };
        }
    }
}