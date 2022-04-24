import { UserProps } from "modules/users/domain/entities/User";
import { ICreateUser } from "modules/users/domain/features/ICreateUser";
import AppError from "shared/errors/AppError";
import { IHashData } from "shared/infra/container/providers/crypto/IHashData";

import { IUserRepository } from "../interfaces/IUserRepository";

export class CreateUserService implements ICreateUser {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly hashData: IHashData
  ) {}
  async create({ email, name, password }: UserProps): Promise<UserProps> {
    const user = await this.userRepository.findUserByEmail(email);

    if (user) throw new AppError("Email aleady exists");

    const passwordHash = await this.hashData.hashData(password);

    const userReturn = await this.userRepository.createUsers({
      email,
      name,
      password: passwordHash,
    });

    return userReturn;
  }
}
