import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("balance")
class BalanceORM {
  @PrimaryColumn()
  id: string;

  @Column({ name: "user_id" })
  userId: string;

  @Column()
  balance: number;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @CreateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
export { BalanceORM };
