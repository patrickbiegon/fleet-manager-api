using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PartnerRiskManager.Migrations
{
    public partial class AddPartnerSelfCertifications : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "38aac3ca-5ab8-4a99-9e54-5ef0d348c697");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5bf6deb8-d43e-43b2-861c-f68da6bc1a3d");

            migrationBuilder.CreateTable(
                name: "PartnerSelfCertifications",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NotIncludedInExclusionaryCriteria = table.Column<bool>(type: "bit", nullable: false),
                    Remarks = table.Column<string>(type: "varchar(500)", nullable: true),
                    RepresentativeName = table.Column<string>(type: "varchar(150)", nullable: true),
                    RepresentativeTitle = table.Column<string>(type: "varchar(150)", nullable: true),
                    Signature = table.Column<bool>(type: "bit", nullable: false),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    PartnerId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PartnerSelfCertifications", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PartnerSelfCertifications_Partners_PartnerId",
                        column: x => x.PartnerId,
                        principalTable: "Partners",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "ce432a74-97e5-4bf7-911b-ad29a27615c1", "1aa61979-e3a0-4ab4-bd39-95a7379f058e", "Admin", "ADMIN" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "e7214448-e6ee-4914-8e62-c1b8da7db90a", "d3490f85-b0f0-4916-8183-aa27af4abb18", "Employee", "EMPLOYEE" });

            migrationBuilder.CreateIndex(
                name: "IX_PartnerSelfCertifications_PartnerId",
                table: "PartnerSelfCertifications",
                column: "PartnerId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PartnerSelfCertifications");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ce432a74-97e5-4bf7-911b-ad29a27615c1");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e7214448-e6ee-4914-8e62-c1b8da7db90a");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "38aac3ca-5ab8-4a99-9e54-5ef0d348c697", "28e5aed1-3e60-4934-980b-13843be95be9", "Admin", "ADMIN" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "5bf6deb8-d43e-43b2-861c-f68da6bc1a3d", "e7645e12-c7aa-4bb7-86a2-bfe27fae74cd", "Employee", "EMPLOYEE" });
        }
    }
}
