using PartnerRiskManager.Data;
using PartnerRiskManager.Services;
using PartnerRiskManager.Services.Dependecy;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;
using System;
using System.IO;
using System.Reflection;

namespace PartnerRiskManager.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services,
            IConfiguration config)
        {

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "PartnerRiskManager", Version = "v1" });
                var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
                var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
                c.IncludeXmlComments(xmlPath);
            });
            services.AddDbContext<ApplicationDbContext>(options =>
            {
                var connectionString = "Data Source=DESKTOP-GQ4QC2U\\SQLEXPRESS;Initial Catalog=PartnerRiskAssessment;Integrated Security=True";
                options.UseSqlServer(connectionString);
            });

            services.AddCors();

            services.AddScoped<IPartnerService, PartnerService>();

            services.AddScoped<IGeneralInformationService, GeneralInformationService>();
            services.AddScoped<IPartnerHistoryService, PartnerHistoryService>();
            services.AddScoped<ITicketService, TicketService>();
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<TokenService>();
            services.AddTransient<IMailService, MailService>();

            return services;
        }
    }
}
