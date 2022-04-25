import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class AlterTableTransaction1650835688484 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("transaction", "user_id");
    await queryRunner.addColumn(
      "transaction",
      new TableColumn({
        name: "balance_id",
        type: "uuid",
      })
    );
    await queryRunner.createForeignKey(
      "transaction",
      new TableForeignKey({
        name: "FKBalanceTransaction",
        referencedTableName: "balance",
        referencedColumnNames: ["id"],
        columnNames: ["balance_id"],
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("transaction", "balanceId");
  }
}
