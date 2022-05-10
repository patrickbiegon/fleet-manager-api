using Microsoft.EntityFrameworkCore.Migrations;

namespace PartnerRiskManager.Migrations
{
    public partial class AddUNStreamlinedAssessment : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "21c6c451-26b6-473a-a02f-ff1343b9d68d");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d097f843-e117-4510-9ef0-fdebcd471c71");

            migrationBuilder.CreateTable(
                name: "StreamlinedAssessments",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PriorExperience = table.Column<bool>(type: "bit", nullable: false),
                    TechnicalAssistanceProjects = table.Column<bool>(type: "bit", nullable: false),
                    TechnicalSkillsExperienceMatch = table.Column<bool>(type: "bit", nullable: false),
                    AnnualTurnover = table.Column<bool>(type: "bit", nullable: false),
                    PercAnnualTurnover = table.Column<bool>(type: "bit", nullable: false),
                    FinancialFraudCorruption = table.Column<bool>(type: "bit", nullable: false),
                    InsolvencyWindingUp = table.Column<bool>(type: "bit", nullable: false),
                    PublicExternalAudit = table.Column<bool>(type: "bit", nullable: false),
                    GAAP = table.Column<bool>(type: "bit", nullable: false),
                    AnyUnqualifiedAudit = table.Column<bool>(type: "bit", nullable: false),
                    MemberIndustryassociation = table.Column<bool>(type: "bit", nullable: false),
                    HasRelevantAccreditations = table.Column<bool>(type: "bit", nullable: false),
                    AccreditationName = table.Column<bool>(type: "bit", nullable: false),
                    PartnerId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StreamlinedAssessments", x => x.Id);
                    table.ForeignKey(
                        name: "FK_StreamlinedAssessments_Partners_PartnerId",
                        column: x => x.PartnerId,
                        principalTable: "Partners",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "9dd00536-c257-4c44-8aed-69212b3c83f4", "9fecf604-627b-4a02-9a0d-3e284bf23611", "Admin", "ADMIN" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "ad3dc778-4db7-46bd-a982-4ad2930da44a", "b843bfdd-3219-464c-a8ec-5217a19735cb", "Employee", "EMPLOYEE" });

            migrationBuilder.CreateIndex(
                name: "IX_StreamlinedAssessments_PartnerId",
                table: "StreamlinedAssessments",
                column: "PartnerId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "StreamlinedAssessments");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9dd00536-c257-4c44-8aed-69212b3c83f4");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ad3dc778-4db7-46bd-a982-4ad2930da44a");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "21c6c451-26b6-473a-a02f-ff1343b9d68d", "b8993476-3236-48d5-811e-4f6796838ffe", "Admin", "ADMIN" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "d097f843-e117-4510-9ef0-fdebcd471c71", "4d7a3967-9f8c-4906-9f2d-25e15c40c6c7", "Employee", "EMPLOYEE" });
        }
    }
}
