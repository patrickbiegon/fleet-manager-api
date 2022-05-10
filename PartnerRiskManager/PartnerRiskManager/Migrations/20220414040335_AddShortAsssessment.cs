using Microsoft.EntityFrameworkCore.Migrations;

namespace PartnerRiskManager.Migrations
{
    public partial class AddShortAsssessment : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "3900a84a-dd30-45a5-9d7c-999add55c4f5");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9cc6a7f5-b5ba-442d-b696-2de335d52872");

            migrationBuilder.CreateTable(
                name: "ShortAssessments",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PriorUNExperience = table.Column<bool>(type: "bit", nullable: false),
                    TechnicalSkillsMatch = table.Column<bool>(type: "bit", nullable: false),
                    SpecifySkills = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AnnualTurnoverBudget = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AuditReportsPublic = table.Column<bool>(type: "bit", nullable: false),
                    FinancialDeficiencies = table.Column<bool>(type: "bit", nullable: false),
                    NonCompliance = table.Column<bool>(type: "bit", nullable: false),
                    PartnerId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ShortAssessments", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ShortAssessments_Partners_PartnerId",
                        column: x => x.PartnerId,
                        principalTable: "Partners",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "5d9c1808-d651-4842-b666-ba19045df32f", "988d9338-28b1-4759-8305-a7f7e2a48696", "Admin", "ADMIN" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "802109d6-8abe-46de-9cbb-d12c243e032e", "9994fc95-5824-42d8-9636-5327bfb6bc8f", "Employee", "EMPLOYEE" });

            migrationBuilder.CreateIndex(
                name: "IX_ShortAssessments_PartnerId",
                table: "ShortAssessments",
                column: "PartnerId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ShortAssessments");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5d9c1808-d651-4842-b666-ba19045df32f");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "802109d6-8abe-46de-9cbb-d12c243e032e");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "9cc6a7f5-b5ba-442d-b696-2de335d52872", "5da5748a-b927-4a9c-b697-fc6365102d3b", "Admin", "ADMIN" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "3900a84a-dd30-45a5-9d7c-999add55c4f5", "35640598-4c9b-4bdd-9ced-116bfd4b7cd4", "Employee", "EMPLOYEE" });
        }
    }
}
