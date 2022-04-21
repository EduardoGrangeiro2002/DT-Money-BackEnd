import { IUserRepository } from "modules/users/dataLayers/interfaces/IUserRepository";
import { UserModel } from "modules/users/dataLayers/models";
import { UserDTO, UserProps } from "modules/users/domain/entities/User";
import { getRepository, Repository } from "typeorm";

import { User } from "../entities/User";

export class UserRepository implements IUserRepository {
  private readonly usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getRepository(User);
  }
  save: (data: UserProps) => Promise<void>;

  async createUsers({ email, name, password }: UserModel.Input): Promise<User> {
    const user = this.usersRepository.create({ email, name, password });

    await this.usersRepository.save(user);

    return user;
  }
  async findUserByEmail(email: string): Promise<UserDTO> {
    const user = await this.usersRepository.findOne({ email });

    return user;
  }
  async findUserById(id: string): Promise<UserDTO> {
    const user = await this.usersRepository.findOne(id);

    return user;
  }
}
