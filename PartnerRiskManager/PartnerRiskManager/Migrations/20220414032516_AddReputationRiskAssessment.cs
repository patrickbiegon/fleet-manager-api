using Microsoft.EntityFrameworkCore.Migrations;

namespace PartnerRiskManager.Migrations
{
    public partial class AddReputationRiskAssessment : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ce432a74-97e5-4bf7-911b-ad29a27615c1");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e7214448-e6ee-4914-8e62-c1b8da7db90a");

            migrationBuilder.CreateTable(
                name: "ReputationalRiskAssessments",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Criticism = table.Column<bool>(type: "bit", nullable: false),
                    Demonstrations = table.Column<bool>(type: "bit", nullable: false),
                    Lawsuits = table.Column<bool>(type: "bit", nullable: false),
                    Others = table.Column<bool>(type: "bit", nullable: false),
                    Controversies = table.Column<string>(type: "varchar(500)", nullable: true),
                    EngagementwithUN = table.Column<bool>(type: "bit", nullable: false),
                    EngagementList = table.Column<string>(type: "varchar(500)", nullable: true),
                    PreviousHarm = table.Column<bool>(type: "bit", nullable: false),
                    ContributeToSDGS = table.Column<bool>(type: "bit", nullable: false),
                    Conclusion = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PartnerId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ReputationalRiskAssessments", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ReputationalRiskAssessments_Partners_PartnerId",
                        column: x => x.PartnerId,
                        principalTable: "Partners",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "2dead138-7aff-460a-b4b6-9772d47415d2", "d8d09436-3f8f-4be7-a115-164a705a2984", "Admin", "ADMIN" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "8607e5d9-4ec0-4bd8-97d6-87d2eb3ba02e", "69473a95-2d6e-4594-8f44-b97e98dfa440", "Employee", "EMPLOYEE" });

            migrationBuilder.CreateIndex(
                name: "IX_ReputationalRiskAssessments_PartnerId",
                table: "ReputationalRiskAssessments",
                column: "PartnerId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ReputationalRiskAssessments");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2dead138-7aff-460a-b4b6-9772d47415d2");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "8607e5d9-4ec0-4bd8-97d6-87d2eb3ba02e");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "ce432a74-97e5-4bf7-911b-ad29a27615c1", "1aa61979-e3a0-4ab4-bd39-95a7379f058e", "Admin", "ADMIN" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "e7214448-e6ee-4914-8e62-c1b8da7db90a", "d3490f85-b0f0-4916-8183-aa27af4abb18", "Employee", "EMPLOYEE" });
        }
    }
}
