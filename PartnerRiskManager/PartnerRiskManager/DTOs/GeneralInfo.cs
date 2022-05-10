using System;
using System.ComponentModel.DataAnnotations;

namespace PartnerRiskManager.DTOs
{
    public class GeneralInformationDto
    {
        public int Id { get; set; }

        public string Type { get; set; }
       
        public string Name { get; set; }
       
        public string Address { get; set; }
       
        public string WebsiteTelephone { get; set; }
       
        public string MainContact { get; set; }

        public string Countriesregions { get; set; }

        public string Description { get; set; }

        public string OwnershipName { get; set; }

        public int NumberEmployees { get; set; }

        public int AnnualTurnover { get; set; }

        public string LegalRepresentative { get; set; }
       
        public string YearLatestAnnualReport { get; set; }

        public string AnnualReportWeblink { get; set; }

        public bool IsSubsidiaryOrCountryOffice { get; set; }

        public string ParentEntity { get; set; }

        public bool ExpressionOfInterest { get; set; }

    }
}
