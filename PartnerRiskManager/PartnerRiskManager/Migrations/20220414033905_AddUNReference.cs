using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PartnerRiskManager.Migrations
{
    public partial class AddUNReference : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2dead138-7aff-460a-b4b6-9772d47415d2");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "8607e5d9-4ec0-4bd8-97d6-87d2eb3ba02e");

            migrationBuilder.CreateTable(
                name: "UNReferences",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EngagementDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ProjectTitle = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    GrantedAmount = table.Column<int>(type: "int", nullable: false),
                    FounderName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PartnerId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UNReferences", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UNReferences_Partners_PartnerId",
                        column: x => x.PartnerId,
                        principalTable: "Partners",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "9cc6a7f5-b5ba-442d-b696-2de335d52872", "5da5748a-b927-4a9c-b697-fc6365102d3b", "Admin", "ADMIN" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "3900a84a-dd30-45a5-9d7c-999add55c4f5", "35640598-4c9b-4bdd-9ced-116bfd4b7cd4", "Employee", "EMPLOYEE" });

            migrationBuilder.CreateIndex(
                name: "IX_UNReferences_PartnerId",
                table: "UNReferences",
                column: "PartnerId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "UNReferences");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "3900a84a-dd30-45a5-9d7c-999add55c4f5");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9cc6a7f5-b5ba-442d-b696-2de335d52872");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "2dead138-7aff-460a-b4b6-9772d47415d2", "d8d09436-3f8f-4be7-a115-164a705a2984", "Admin", "ADMIN" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "8607e5d9-4ec0-4bd8-97d6-87d2eb3ba02e", "69473a95-2d6e-4594-8f44-b97e98dfa440", "Employee", "EMPLOYEE" });
        }
    }
}
