using Microsoft.EntityFrameworkCore.Migrations;

namespace PartnerRiskManager.Migrations
{
    public partial class AddUNStreamlinedTechnicalManPower : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "38f0a5aa-0e12-442c-ba5b-21c21bcf62f5");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e2122722-c13b-4eec-b6a1-6644b3a7e1cc");

            migrationBuilder.CreateTable(
                name: "StreamlinedTechnicalManPowers",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PermanentStaff = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OtherStaffing = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Year = table.Column<int>(type: "int", nullable: false),
                    Overall = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RelevantField = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PartnerId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StreamlinedTechnicalManPowers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_StreamlinedTechnicalManPowers_Partners_PartnerId",
                        column: x => x.PartnerId,
                        principalTable: "Partners",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "21c6c451-26b6-473a-a02f-ff1343b9d68d", "b8993476-3236-48d5-811e-4f6796838ffe", "Admin", "ADMIN" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "d097f843-e117-4510-9ef0-fdebcd471c71", "4d7a3967-9f8c-4906-9f2d-25e15c40c6c7", "Employee", "EMPLOYEE" });

            migrationBuilder.CreateIndex(
                name: "IX_StreamlinedTechnicalManPowers_PartnerId",
                table: "StreamlinedTechnicalManPowers",
                column: "PartnerId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "StreamlinedTechnicalManPowers");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "21c6c451-26b6-473a-a02f-ff1343b9d68d");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d097f843-e117-4510-9ef0-fdebcd471c71");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "38f0a5aa-0e12-442c-ba5b-21c21bcf62f5", "049c6a39-4d77-4665-88df-043d5bc76134", "Admin", "ADMIN" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "e2122722-c13b-4eec-b6a1-6644b3a7e1cc", "89e30b4a-4af0-4e35-a3cb-8ac2a2a7d2c1", "Employee", "EMPLOYEE" });
        }
    }
}
