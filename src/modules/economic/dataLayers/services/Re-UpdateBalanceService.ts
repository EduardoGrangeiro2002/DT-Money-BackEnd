/* eslint-disable no-plusplus */
import { Balance } from "modules/economic/domain/entities";
import { IReUpdateBalance } from "modules/economic/domain/features/IRe-UpdateBalance";
import AppError from "shared/errors/AppError";

import { IBalanceRepository } from "../interfaces/IBalanceRepository";
import { ITransactionRepository } from "../interfaces/ITransactionRepository";

export class ReUpdateBalanceService implements IReUpdateBalance {
  constructor(
    private readonly transactionRepository: ITransactionRepository,
    private readonly balanceRepository: IBalanceRepository
  ) {}
  async ReUpdateBalance(balanceId: string): Promise<Balance> {
    const transactions =
      await this.transactionRepository.findTransactionsByBalanceId(balanceId);
    let total = 0;

    for (let i = 0; i < transactions.length; i++) {
      switch (transactions[i].toDto().type) {
        case "deposit":
          total += parseFloat(transactions[i].getValue() as unknown as string);
          break;
        case "withdraw":
          total -= parseFloat(transactions[i].getValue() as unknown as string);
          break;
        default:
          throw new AppError("Type not exists");
      }
    }
    const balance = await this.balanceRepository.findById(balanceId);

    if (!balance) throw new AppError("Balance not exists");

    balance.balance = total;
    balance.updatedAt = new Date();
    await this.balanceRepository.updateBalance(balance);

    return balance;
  }
}
