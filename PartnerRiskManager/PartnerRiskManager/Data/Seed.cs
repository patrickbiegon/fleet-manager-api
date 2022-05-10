using PartnerRiskManager.DTOs;
using PartnerRiskManager.Models;
using PartnerRiskManager.Services;
using Microsoft.AspNetCore.Identity;
using OfficeOpenXml;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace PartnerRiskManager.Data
{
    public class Seed
    {
        private static readonly string SEEDPATH = Path.GetFullPath(".\\Data\\Seed").ToString();

        public static async Task SeedData(ApplicationDbContext context, UserManager<ApplicationUser> userManager, IUserService userService)
        {
            if (!context.Partners.Any())
            {
                var partnerList = new List<Partner>();
                var filePath = SEEDPATH + "\\EM_Partners_100_1.xlsx";

                ExcelPackage.LicenseContext = LicenseContext.NonCommercial;
                FileInfo existingFile = new FileInfo(filePath);
                using (ExcelPackage package = new ExcelPackage(existingFile))
                {
                    partnerList = Utils.ParsePartnersExcel(package);
                }

                await context.Partners.AddRangeAsync(partnerList);
                await context.SaveChangesAsync();
            }

            if (!context.Users.Any())
            {
                var filePath = SEEDPATH + "\\EM_Users_100_1.xlsx";

                ExcelPackage.LicenseContext = LicenseContext.NonCommercial;
                FileInfo existingFile = new FileInfo(filePath);
                using (ExcelPackage package = new ExcelPackage(existingFile))
                {
                    var userList = Utils.ParseUsersExcel(package);
                    var (successful, failed) = await userService.RegisterUsers(userList);
                }
            }
        }
    }
}
