import { TransactionProps } from "modules/economic/domain/entities/Transaction";
import { IUpdateBalance } from "modules/economic/domain/features";
import AppError from "shared/errors/AppError";

import { IBalanceRepository } from "../interfaces/IBalanceRepository";

export class UpdateBalanceService implements IUpdateBalance {
  constructor(private readonly balanceRepository: IBalanceRepository) {}
  async update(transaction: TransactionProps) {
    const { balanceId, type } = transaction;

    const balance = await this.balanceRepository.findById(balanceId);

    if (!balance) throw new AppError("Balance not found!");

    const values = [
      parseFloat(balance.balance as unknown as string),
      parseFloat(transaction.value as unknown as string),
    ];

    let total = 0;

    switch (type) {
      case "deposit":
        total = values[0] + values[1];
        break;
      case "withdraw":
        total = values[0] - values[1];
        break;
      default:
        throw new AppError("Type not exists");
    }

    balance.balance = total;
    balance.updatedAt = new Date();
    await this.balanceRepository.updateBalance(balance);

    return balance;
  }
}
