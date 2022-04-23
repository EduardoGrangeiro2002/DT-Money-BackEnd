import { TransactionProps } from "modules/transactions/domain/entities/Transaction";
import { IUpdateBalance } from "modules/transactions/domain/features";
import AppError from "shared/errors/AppError";

import { IBalanceRepository } from "../interfaces/IBalanceRepository";

export class UpdateBalanceService implements IUpdateBalance {
  constructor(private readonly balanceRepository: IBalanceRepository) {}
  async update(transaction: TransactionProps) {
    const { userId, type } = transaction;

    const balance = await this.balanceRepository.findByUserId(userId);

    if (!balance) throw new AppError("Balance not found!");

    switch (type) {
      case "deposit":
        balance.balance += transaction.value;
        break;
      case "withdraw":
        balance.balance -= transaction.value;
        break;
      default:
        throw new AppError("Type not exists");
    }
    await this.balanceRepository.updateBalance(balance);

    return balance;
  }
}
