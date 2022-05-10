using PartnerRiskManager.DTOs;
using PartnerRiskManager.Models;
using PartnerRiskManager.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace PartnerRiskManager.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    
    public class FileController : Controller
    {
        private readonly IPartnerService _partnerService;
        private readonly IUserService _userService;
        private readonly ILogger<FileController> _logger;

        public FileController(IPartnerService partnerService, IUserService userService, ILogger<FileController> logger)
        {
            _partnerService = partnerService;
            _userService = userService;
            _logger = logger;
        }

        [HttpPost]
        [Route("upload/partner-excel")]
        public async Task<IActionResult> UploadPartnersExcel(IFormFile file)
        {
            var partnerList = new List<Partner>();

            using (var stream = new MemoryStream())
            {
                await file.CopyToAsync(stream);
                partnerList = Utils.PartnerStreamToList(stream);
                await _partnerService.AddAsync(partnerList);
            }

            _logger.LogInformation("Partners added from uploaded file");
            return Ok(partnerList);
        }

        [HttpGet]
        [Route("download/partner-excel")]
        public async Task<IActionResult> ExportPartners()
        {
            var partners = await _partnerService.GetAllAsync();
            var excel = Utils.ExportPartnersExcel(partners);
            string excelName = $"PartnerList-{DateTime.Now:yyyyMMddHHmmssfff}.xlsx";

            using (var memoryStream = new MemoryStream())
            {
                excel.SaveAs(memoryStream);
                var content = memoryStream.ToArray();
                return File(content, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", excelName);
            }
        }

        [HttpPost]
        [Route("upload/user-excel")]
        public async Task<IActionResult> UploadUsersExcel(IFormFile file)
        {
            List<RegisterDto> userList;

            using (var stream = new MemoryStream())
            {
                await file.CopyToAsync(stream);
                userList = Utils.UsersStreamToList(stream);

                var (successful, failed) = await _userService.RegisterUsers(userList);

                return Json(new { SuccessfullyRegistered = successful, FailedToRegister = failed });
            }
        }

        [HttpGet]
        [Route("download/user-excel")]
        public async Task<IActionResult> ExportUsers()
        {
            var users = await _userService.GetAllAsync();
            var excel = Utils.ExportUsersExcel(users);
            string excelName = $"PartnerList-{DateTime.Now:yyyyMMddHHmmssfff}.xlsx";

            using (var memoryStream = new MemoryStream())
            {
                excel.SaveAs(memoryStream);
                var content = memoryStream.ToArray();
                return File(content, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", excelName);
            }
        }

    }
}
