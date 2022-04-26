import { UsersTokens } from "modules/users/infra/typeorm/entities/UsersTokens";

import { ICreateUserTokensModels } from "../models/UserTokensModels";

export interface IUsersTokensRepository {
  create({
    expires_date,
    refresh_token,
    user_id,
  }: ICreateUserTokensModels): Promise<UsersTokens>;
  findByUserIdAndRefreshToken(
    user_id: string,
    token: string
  ): Promise<UsersTokens>;
  deleteById(id: string): Promise<void>;
  findByRefreshToken(token: string): Promise<UsersTokens>;
}
