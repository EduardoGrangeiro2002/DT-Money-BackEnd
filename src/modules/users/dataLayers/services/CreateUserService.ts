import { UserProps } from "modules/users/domain/entities/User";
import { ICreateUser } from "modules/users/domain/features/ICreateUser";

import { IUserRepository } from "../interfaces/IUserRepository";

export class CreateUserService implements ICreateUser {
  constructor(private userRepository: IUserRepository) {}
  async create({ email, name, password }: UserProps): Promise<void> {
    await this.userRepository.createUsers({
      email,
      name,
      password,
    });
  }
}
