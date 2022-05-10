using Microsoft.EntityFrameworkCore.Migrations;

namespace PartnerRiskManager.Migrations
{
    public partial class AddExclusionaryCriteriaModifyPartnerIdToInt : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_GeneralInformations_Partners_PartnerId1",
                table: "GeneralInformations");

            migrationBuilder.DropIndex(
                name: "IX_GeneralInformations_PartnerId1",
                table: "GeneralInformations");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "23f0214e-918e-43c4-8141-9a4926722cf9");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "de7fc888-e863-4d4f-9c52-ff4ba0cdd10a");

            migrationBuilder.DropColumn(
                name: "PartnerId1",
                table: "GeneralInformations");

            migrationBuilder.AlterColumn<int>(
                name: "PartnerId",
                table: "GeneralInformations",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.CreateTable(
                name: "ExclusionaryCriterias",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AdverseAppearances = table.Column<bool>(type: "bit", nullable: false),
                    CoreWeapons = table.Column<bool>(type: "bit", nullable: false),
                    ControversialWeapons = table.Column<bool>(type: "bit", nullable: false),
                    TobaccoManufacturers = table.Column<bool>(type: "bit", nullable: false),
                    HumanRightsAbuses = table.Column<bool>(type: "bit", nullable: false),
                    NoCommitmentToUNPrinciples = table.Column<bool>(type: "bit", nullable: false),
                    UNGlobalCompact = table.Column<bool>(type: "bit", nullable: false),
                    PartnerId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ExclusionaryCriterias", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ExclusionaryCriterias_Partners_PartnerId",
                        column: x => x.PartnerId,
                        principalTable: "Partners",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "38aac3ca-5ab8-4a99-9e54-5ef0d348c697", "28e5aed1-3e60-4934-980b-13843be95be9", "Admin", "ADMIN" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "5bf6deb8-d43e-43b2-861c-f68da6bc1a3d", "e7645e12-c7aa-4bb7-86a2-bfe27fae74cd", "Employee", "EMPLOYEE" });

            migrationBuilder.CreateIndex(
                name: "IX_GeneralInformations_PartnerId",
                table: "GeneralInformations",
                column: "PartnerId");

            migrationBuilder.CreateIndex(
                name: "IX_ExclusionaryCriterias_PartnerId",
                table: "ExclusionaryCriterias",
                column: "PartnerId");

            migrationBuilder.AddForeignKey(
                name: "FK_GeneralInformations_Partners_PartnerId",
                table: "GeneralInformations",
                column: "PartnerId",
                principalTable: "Partners",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_GeneralInformations_Partners_PartnerId",
                table: "GeneralInformations");

            migrationBuilder.DropTable(
                name: "ExclusionaryCriterias");

            migrationBuilder.DropIndex(
                name: "IX_GeneralInformations_PartnerId",
                table: "GeneralInformations");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "38aac3ca-5ab8-4a99-9e54-5ef0d348c697");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5bf6deb8-d43e-43b2-861c-f68da6bc1a3d");

            migrationBuilder.AlterColumn<string>(
                name: "PartnerId",
                table: "GeneralInformations",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "PartnerId1",
                table: "GeneralInformations",
                type: "int",
                nullable: true);

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

            migrationBuilder.AddForeignKey(
                name: "FK_GeneralInformations_Partners_PartnerId1",
                table: "GeneralInformations",
                column: "PartnerId1",
                principalTable: "Partners",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
