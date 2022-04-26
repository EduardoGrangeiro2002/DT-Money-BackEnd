import { IUsersTokensRepository } from "modules/users/dataLayers/interfaces/IUsersTokensRepository";
import { ICreateUserTokensModels } from "modules/users/dataLayers/models/UserTokensModels";
import { getRepository, Repository } from "typeorm";

import { UsersTokens } from "../entities/UsersTokens";

export class UsersTokensRepository implements IUsersTokensRepository {
  private readonly usersTokensRepository: Repository<UsersTokens>;
  constructor() {
    this.usersTokensRepository = getRepository(UsersTokens);
  }
  async findByRefreshToken(token: string): Promise<UsersTokens> {
    const user = await this.usersTokensRepository.findOne({
      refresh_token: token,
    });

    return user;
  }
  async deleteById(id: string): Promise<void> {
    await this.usersTokensRepository.delete(id);
  }
  async findByUserIdAndRefreshToken(
    user_id: string,
    token: string
  ): Promise<UsersTokens> {
    const userTokens = await this.usersTokensRepository.findOne({
      user_id,
      refresh_token: token,
    });

    return userTokens;
  }
  async create({
    expires_date,
    refresh_token,
    user_id,
  }: ICreateUserTokensModels): Promise<UsersTokens> {
    const newToken = this.usersTokensRepository.create({
      expires_date,
      refresh_token,
      user_id,
    });

    await this.usersTokensRepository.save(newToken);

    return newToken;
  }
}
