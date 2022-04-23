import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class AlterTableTransaction1650721531770 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "transaction",
      new TableColumn({
        name: "user_id",
        type: "uuid",
      })
    );

    await queryRunner.createForeignKey(
      "transaction",
      new TableForeignKey({
        name: "FKTransactionUserId",
        referencedTableName: "user",
        referencedColumnNames: ["id"],
        columnNames: ["user_id"],
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("transaction", "user_id");
    await queryRunner.dropForeignKey("transaction", "FKTransactionUserId");
  }
}
