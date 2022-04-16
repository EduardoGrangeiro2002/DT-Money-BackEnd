import { User } from "modules/users/infra/typeorm/entities/User";

import { UserModel } from "../models";

export interface IUserRepository {
  createUsers: ({ email, name, password }: UserModel.Input) => Promise<User>;
  findUserByEmail: (email: string) => Promise<UserModel.Output>;
  findUserById: (id: string) => Promise<UserModel.Output>;
}
