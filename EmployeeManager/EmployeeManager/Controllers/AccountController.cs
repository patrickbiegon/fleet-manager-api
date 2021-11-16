﻿using EmployeeManager.DTOs;
using EmployeeManager.Models;
using EmployeeManager.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeManager.Controllers
{
    public class AccountController : BaseApiController
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly TokenService _tokenService;

        public AccountController(UserManager<ApplicationUser> userManager, TokenService tokenService)
        {
            _userManager = userManager;
            _tokenService = tokenService;
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserTokenDto>> Login(CredentialDto credentialDto)
        {
            var user = await _userManager.FindByEmailAsync(credentialDto.Email);

            if (user == null || !await _userManager.CheckPasswordAsync(user, credentialDto.Password))
            {
                return Unauthorized();
            }

            return new UserTokenDto 
            { 
                Email = user.Email,
                Token = await _tokenService.GenerateToken(user)
            };
        }

        [HttpPost("register")]
        public async Task<ActionResult> Register(CredentialDto credentialDto)
        {
            var user = new ApplicationUser { UserName = credentialDto.Email, Email = credentialDto.Email };
            var result = await _userManager.CreateAsync(user, credentialDto.Password);

            if (!result.Succeeded)
            {
                return ValidationProblem();
            }

            return Ok();
        }
    }
}
