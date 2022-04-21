import { User } from "modules/users/domain/entities";
import { User as UserTypeorm } from "modules/users/infra/typeorm/entities/User";

import { UserModel } from "../models";

export interface IUserRepository {
  createUsers: ({
    email,
    name,
    password,
  }: UserModel.Input) => Promise<UserTypeorm>;
  findUserByEmail: (email: string) => Promise<UserModel.Output>;
  findUserById: (id: string) => Promise<User>;
  save: (data: UserModel.Input) => Promise<void>;
}
