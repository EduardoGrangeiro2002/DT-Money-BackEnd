/* eslint-disable consistent-return */
import { BaseUser } from "shared/domain/BaseEntity";
import AppError from "shared/errors/AppError";

export type UserProps = {
  id?: string;
  name: string;
  email: string;
  password: string;
  avatar?: string;
  avatarUrl?: string;
  vip?: Vip;
};

export type UserDTO = {
  id: string;
  name: string;
  email: string;
  password: string;
  vip: Vip;
  createdAt: Date;
  updatedAt: Date;
};

export type Vip = "bronze" | "gold" | "platinum" | "diamond";

export class User extends BaseUser {
  private readonly email: string;
  private readonly name: string;
  private readonly id: string;
  private readonly avatar?: string;
  private readonly avatarUrl?: string;
  private vip: Vip;
  private password: string;

  constructor(props: UserProps) {
    super();
    this.id = props.id;
    this.name = props.name;
    this.email = props.email;
    this.avatar = props.avatar;
    this.avatarUrl = props.avatarUrl;
    this.vip = props.vip;
    this.validate();
  }

  protected validate(): AppError | undefined {
    if (this.password.length < 8) {
      return new AppError("Senha deve ter pelo menos 8 caracteres");
    }
  }

  toDto(): Omit<UserDTO, "email" | "createdAt" | "updatedAt"> {
    return {
      id: this.id,
      name: this.name,
      password: this.password,
      vip: this.vip,
    };
  }
}
