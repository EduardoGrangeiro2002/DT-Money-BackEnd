import { UserProps } from "modules/users/domain/entities/User";
import { ICreateUser } from "modules/users/domain/features/ICreateUser";
import AppError from "shared/errors/AppError";

import { IUserRepository } from "../interfaces/IUserRepository";

export class CreateUserService implements ICreateUser {
  constructor(private readonly userRepository: IUserRepository) {}
  async create({ email, name, password }: UserProps): Promise<void> {
    const user = await this.userRepository.findUserByEmail(email);

    if (user) throw new AppError("Email aleady exists");

    await this.userRepository.createUsers({
      email,
      name,
      password,
    });
  }
}
