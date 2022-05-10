using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PartnerRiskManager.Models
{
    public class GeneralInformation
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Column(TypeName = "varchar(10)")]
        public string Type { get; set; }

        [Column(TypeName = "varchar(150)")]
        public string Name { get; set; }

        [Column(TypeName = "varchar(150)")]
        public string Address { get; set; }

        [Column(TypeName = "varchar(150)")]
        public string WebsiteTelephone { get; set; }

        [Column(TypeName = "varchar(150)")]
        public string MainContact { get; set; }

        [Column(TypeName = "varchar(50)")]
        public string Countriesregions { get; set; }

        [Column(TypeName = "varchar(250)")]
        public string Description { get; set; }

        [Column(TypeName = "varchar(150)")]
        public string OwnershipName { get; set; }
        public int NumberEmployees { get; set; }

        public int AnnualTurnover { get; set; }

        [Column(TypeName = "varchar(150)")]
        public string LegalRepresentative { get; set; }

        [Column(TypeName = "varchar(10)")]
        public string YearLatestAnnualReport { get; set; }

        [Column(TypeName = "varchar(150)")]
        public string AnnualReportWeblink { get; set; }

        public bool IsSubsidiaryOrCountryOffice { get; set; }

        [Column(TypeName = "varchar(150)")]
        public string ParentEntity { get; set; }

        public bool ExpressionOfInterest { get; set; }

        public int PartnerId { get; set; }

        public Partner Partner { get; set; }
    }

}
