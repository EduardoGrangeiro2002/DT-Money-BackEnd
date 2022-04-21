/* eslint-disable consistent-return */
import { BaseUser } from "shared/domain/BaseEntity";
import AppError from "shared/errors/AppError";

export type UserProps = {
  id?: string;
  name: string;
  email: string;
  admin: boolean;
  vipId?: string;
  password: string;
  avatar?: string;
  avatarUrl?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type UserDTO = {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
};

export class User extends BaseUser {
  private readonly email: string;
  private readonly name: string;
  private readonly id: string;
  private readonly avatar?: string;
  private readonly avatarUrl?: string;
  private readonly createdAt: Date;
  private readonly updatedAt: Date;
  private readonly admin: boolean;
  private password: string;

  constructor(props: UserProps) {
    super();
    this.id = props.id;
    this.name = props.name;
    this.admin = props.admin;
    this.email = props.email;
    this.password = props.password;
    this.avatar = props.avatar;
    this.avatarUrl = props.avatarUrl;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }

  protected validate(): AppError | undefined {
    if (this.password.length < 8) {
      return new AppError("Senha deve ter pelo menos 8 caracteres");
    }
  }

  toDto(): Omit<UserProps, "email" | "createdAt" | "updatedAt"> {
    return {
      id: this.id,
      name: this.name,
      admin: this.admin,
      password: this.password,
      avatar: this.avatar,
      avatarUrl: this.avatarUrl,
    };
  }

  getAvatarUrl(): string {
    return this.avatar;
  }

  getPassword(): string {
    return this.password;
  }

  getEmail(): string {
    return this.email;
  }
}
