import { Balance } from "modules/economic/domain/entities";
import { ICreateBalanceByUser } from "modules/economic/domain/features/ICreateBalanceByUser";
import AppError from "shared/errors/AppError";

import { IBalanceRepository } from "../interfaces/IBalanceRepository";

export class CreateBalanceByUserService implements ICreateBalanceByUser {
  constructor(private readonly balanceRepository: IBalanceRepository) {}

  async createBalanceByUser(userId: string): Promise<Balance> {
    const balanceUser = await this.balanceRepository.findByUserId(userId);

    if (balanceUser) throw new AppError("Balance already exists");

    const balanceAccount = await this.balanceRepository.createBalance({
      userId,
      balance: 0,
    });

    return balanceAccount;
  }
}
