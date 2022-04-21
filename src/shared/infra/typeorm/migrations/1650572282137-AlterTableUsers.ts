import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class AlterTableUsers1650572282137 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "user",
      new TableColumn({
        name: "vip_id",
        type: "uuid",
        isNullable: true,
      })
    );
    await queryRunner.createForeignKey(
      "user",
      new TableForeignKey({
        name: "FKVipId",
        referencedTableName: "vip",
        referencedColumnNames: ["id"],
        columnNames: ["vip_id"],
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("user", "vip_id");
    await queryRunner.dropForeignKey("user", "FKVipId");
  }
}
