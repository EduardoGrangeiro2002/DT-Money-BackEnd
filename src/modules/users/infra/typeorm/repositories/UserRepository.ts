import { IUserRepository } from "modules/users/dataLayers/interfaces/IUserRepository";
import { UserModel } from "modules/users/dataLayers/models";
import { UserProps } from "modules/users/domain/entities/User";
import { getRepository, Repository } from "typeorm";

import { User } from "../../../domain/entities/index";
import { User as UserTypeorm } from "../entities/User";

export class UserRepository implements IUserRepository {
  private readonly usersRepository: Repository<UserTypeorm>;

  constructor() {
    this.usersRepository = getRepository(UserTypeorm);
  }
  save: (data: UserProps) => Promise<void>;

  async createUsers({
    email,
    name,
    password,
  }: UserModel.Input): Promise<UserTypeorm> {
    const user = this.usersRepository.create({ email, name, password });

    await this.usersRepository.save(user);

    return user;
  }
  async findUserByEmail(email: string): Promise<User> {
    const userData = await this.usersRepository.findOne({ email });

    let user: User | undefined;

    if (userData) {
      user = new User(userData as unknown as UserProps);
    }
    return user;
  }
  async findUserById(id: string): Promise<User> {
    const userData = await this.usersRepository.findOne(id);
    let user: User | undefined;

    if (userData) {
      user = new User(userData as unknown as UserProps);
    }
    return user;
  }
}
