using PartnerRiskManager.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace PartnerRiskManager.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions options)
            :base(options)
        {
        }
        public DbSet<ApplicationUser> ApplicationUsers { get; set; }
        
        public DbSet<Partner> Partners { get; set; }
        public DbSet<PartnerHistory> PartnerHistory { get; set; }
        public DbSet<Ticket> Tickets { get; set; }
        public DbSet<GeneralInformation> GeneralInformations { get; set; }

        public DbSet<ExclusionaryCriteria> ExclusionaryCriterias { get; set; }

        public DbSet<PartnerSelfCertification> PartnerSelfCertifications { get; set; }

        public DbSet<ReputationalRiskAssessment> ReputationalRiskAssessments { get; set; }

        public DbSet<UNReference> UNReferences { get; set; }

        public DbSet<ShortAssessment> ShortAssessments { get; set; }

        public DbSet<UNStreamlinedReference> UNStreamlinedReferences { get; set; }

        public DbSet<StreamlinedTechnicalManPower> StreamlinedTechnicalManPowers { get; set; }

        public DbSet<StreamlinedAssessment> StreamlinedAssessments { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<IdentityRole>().HasData(
                new IdentityRole { Name = "Admin", NormalizedName = "ADMIN"},
                new IdentityRole { Name = "Employee", NormalizedName = "EMPLOYEE" }
            );
        }
    }
}
