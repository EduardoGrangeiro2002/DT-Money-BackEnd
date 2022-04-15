import { IUserRepository } from "modules/users/dataLayers/interfaces/IUserRepository";
import { UserModel } from "modules/users/dataLayers/models";
import { UserDTO } from "modules/users/domain/entities/User";
import { getRepository, Repository } from "typeorm";

import { User } from "../entities/User";

export class UserRepository implements IUserRepository {
  private readonly usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getRepository(User);
  }

  createUsers({ email, name, password }: UserModel.Input): Promise<void> {}
  findUserByEmail: (email: string) => Promise<UserDTO>;
  findUserById: (id: string) => Promise<UserDTO>;
}
