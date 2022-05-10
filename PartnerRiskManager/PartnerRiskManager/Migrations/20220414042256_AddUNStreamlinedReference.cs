using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PartnerRiskManager.Migrations
{
    public partial class AddUNStreamlinedReference : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5d9c1808-d651-4842-b666-ba19045df32f");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "802109d6-8abe-46de-9cbb-d12c243e032e");

            migrationBuilder.CreateTable(
                name: "UNStreamlinedReferences",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EngagementDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ProjectTitle = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    GrantedAmount = table.Column<int>(type: "int", nullable: false),
                    FounderName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TechnicalAssistanceTypeScope = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PartnerId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UNStreamlinedReferences", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UNStreamlinedReferences_Partners_PartnerId",
                        column: x => x.PartnerId,
                        principalTable: "Partners",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "38f0a5aa-0e12-442c-ba5b-21c21bcf62f5", "049c6a39-4d77-4665-88df-043d5bc76134", "Admin", "ADMIN" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "e2122722-c13b-4eec-b6a1-6644b3a7e1cc", "89e30b4a-4af0-4e35-a3cb-8ac2a2a7d2c1", "Employee", "EMPLOYEE" });

            migrationBuilder.CreateIndex(
                name: "IX_UNStreamlinedReferences_PartnerId",
                table: "UNStreamlinedReferences",
                column: "PartnerId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "UNStreamlinedReferences");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "38f0a5aa-0e12-442c-ba5b-21c21bcf62f5");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e2122722-c13b-4eec-b6a1-6644b3a7e1cc");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "5d9c1808-d651-4842-b666-ba19045df32f", "988d9338-28b1-4759-8305-a7f7e2a48696", "Admin", "ADMIN" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "802109d6-8abe-46de-9cbb-d12c243e032e", "9994fc95-5824-42d8-9636-5327bfb6bc8f", "Employee", "EMPLOYEE" });
        }
    }
}
