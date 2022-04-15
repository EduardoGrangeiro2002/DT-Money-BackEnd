import { Vip } from "modules/users/domain/entities/User";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("user")
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  vip: Vip;

  @Column()
  avatar: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @CreateDateColumn({ name: "updated_at" })
  updatedAt: Date;
}
