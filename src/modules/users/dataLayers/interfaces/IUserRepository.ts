import { UserModel } from "../models";

export interface IUserRepository {
  createUsers: ({ email, name, password }: UserModel.Input) => Promise<void>;
}
