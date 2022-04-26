import { sign } from "jsonwebtoken";
import { ISessionsUser, Sessions } from "modules/users/domain/features";
import AppError from "shared/errors/AppError";
import { IHashData } from "shared/infra/container/providers/crypto/IHashData";

import { authConfig } from "../config/auth";
import { IUserRepository } from "../interfaces";

export class SessionsUserService implements ISessionsUser {
  constructor(
    private userRepository: IUserRepository,
    private hashData: IHashData
  ) {}
  async sessions({
    email,
    password,
  }: Sessions.Input): Promise<Sessions.Output> {
    const user = await this.userRepository.findUserByEmail(email);

    if (!user) throw new AppError("Email não cadastrado");

    const checkPassword = await this.hashData.compareHashData(
      password,
      user.getPassword()
    );
    if (!checkPassword) throw new AppError("Senha ou usuário incorretos");

    const { id, name, vipId } = user.toDto();
    const avatarUrl = user.getAvatarUrl();

    const token = sign({}, authConfig.jwt.secrect, {
      subject: id,
      expiresIn: authConfig.jwt.expiresIn,
    });

    return {
      token,
      user: { name, vipId, avatarUrl },
    };
  }
}
