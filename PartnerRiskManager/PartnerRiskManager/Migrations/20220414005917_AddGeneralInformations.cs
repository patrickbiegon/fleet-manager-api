using Microsoft.EntityFrameworkCore.Migrations;

namespace PartnerRiskManager.Migrations
{
    public partial class AddGeneralInformations : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "4de66d3c-39b1-45ab-8980-8e5ceb8862ab");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e74ec3d2-7c44-47a8-a48b-acc10a919688");

            migrationBuilder.CreateTable(
                name: "GeneralInformations",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Type = table.Column<string>(type: "varchar(10)", nullable: true),
                    Name = table.Column<string>(type: "varchar(150)", nullable: true),
                    Address = table.Column<string>(type: "varchar(150)", nullable: true),
                    WebsiteTelephone = table.Column<string>(type: "varchar(150)", nullable: true),
                    MainContact = table.Column<string>(type: "varchar(150)", nullable: true),
                    Countriesregions = table.Column<string>(type: "varchar(50)", nullable: true),
                    Description = table.Column<string>(type: "varchar(250)", nullable: true),
                    OwnershipName = table.Column<string>(type: "varchar(150)", nullable: true),
                    NumberEmployees = table.Column<int>(type: "int", nullable: false),
                    AnnualTurnover = table.Column<int>(type: "int", nullable: false),
                    LegalRepresentative = table.Column<string>(type: "varchar(150)", nullable: true),
                    YearLatestAnnualReport = table.Column<string>(type: "varchar(10)", nullable: true),
                    AnnualReportWeblink = table.Column<string>(type: "varchar(150)", nullable: true),
                    IsSubsidiaryOrCountryOffice = table.Column<bool>(type: "bit", nullable: false),
                    ParentEntity = table.Column<string>(type: "varchar(150)", nullable: true),
                    ExpressionOfInterest = table.Column<bool>(type: "bit", nullable: false),
                    PartnerId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PartnerId1 = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GeneralInformations", x => x.Id);
                    table.ForeignKey(
                        name: "FK_GeneralInformations_Partners_PartnerId1",
                        column: x => x.PartnerId1,
                        principalTable: "Partners",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "de7fc888-e863-4d4f-9c52-ff4ba0cdd10a", "8d5b1a0e-d08d-41f3-af6d-ab1de1609335", "Admin", "ADMIN" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "23f0214e-918e-43c4-8141-9a4926722cf9", "c9f67b1b-38fd-40b0-b3eb-f4a0ca7f6c30", "Employee", "EMPLOYEE" });

            migrationBuilder.CreateIndex(
                name: "IX_GeneralInformations_PartnerId1",
                table: "GeneralInformations",
                column: "PartnerId1");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "GeneralInformations");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "23f0214e-918e-43c4-8141-9a4926722cf9");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "de7fc888-e863-4d4f-9c52-ff4ba0cdd10a");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "4de66d3c-39b1-45ab-8980-8e5ceb8862ab", "3b6f6b55-5676-4386-86c5-c0b67f85fafe", "Admin", "ADMIN" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "e74ec3d2-7c44-47a8-a48b-acc10a919688", "95e7b8b4-8d5e-483c-8383-0756b7a39485", "Employee", "EMPLOYEE" });
        }
    }
}
