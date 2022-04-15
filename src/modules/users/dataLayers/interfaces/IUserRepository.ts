import { UserModel } from "../models";

export interface IUserRepository {
  createUsers: ({ email, name, password }: UserModel.Input) => Promise<void>;
  findUserByEmail: (email: string) => Promise<UserModel.Output>;
  findUserById: (id: string) => Promise<UserModel.Output>;
}
