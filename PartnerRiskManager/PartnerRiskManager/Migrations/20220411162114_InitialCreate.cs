using Microsoft.EntityFrameworkCore.Migrations;

namespace PartnerRiskManager.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "1bde998f-979f-4c57-8dd4-e05a8784d86e");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "81b90640-5e86-4616-86aa-3485c613179f");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "4de66d3c-39b1-45ab-8980-8e5ceb8862ab", "3b6f6b55-5676-4386-86c5-c0b67f85fafe", "Admin", "ADMIN" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "e74ec3d2-7c44-47a8-a48b-acc10a919688", "95e7b8b4-8d5e-483c-8383-0756b7a39485", "Employee", "EMPLOYEE" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "4de66d3c-39b1-45ab-8980-8e5ceb8862ab");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e74ec3d2-7c44-47a8-a48b-acc10a919688");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "81b90640-5e86-4616-86aa-3485c613179f", "8ef26121-d22c-4c87-897f-efe3a4a35c68", "Admin", "ADMIN" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "1bde998f-979f-4c57-8dd4-e05a8784d86e", "188e5cf5-93a7-4ffe-9db9-d412b901500f", "Employee", "EMPLOYEE" });
        }
    }
}
