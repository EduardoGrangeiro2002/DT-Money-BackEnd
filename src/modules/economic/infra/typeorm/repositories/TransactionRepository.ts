import { ITransactionRepository } from "modules/economic/dataLayers/interfaces/ITransactionRepository";
import {
  Transaction,
  TransactionProps,
} from "modules/economic/domain/entities";
import { TransactionNM } from "modules/economic/domain/features/ICreateTransaction";
import { getRepository, Repository } from "typeorm";

import { TransactionORM } from "../entities/Transaction";

export class TransactionRepository implements ITransactionRepository {
  private readonly transactionRepository: Repository<TransactionORM>;
  constructor() {
    this.transactionRepository = getRepository(TransactionORM);
  }
  async findTransactionsByBalanceId(balanceId: string): Promise<Transaction[]> {
    const transactions = await this.transactionRepository.find({
      where: { balanceId },
    });
    const transaction: Transaction[] = [];

    for (let i = 0; i < transactions.length; i += 1) {
      transaction.push(
        new Transaction(transactions[i] as unknown as TransactionProps)
      );
    }

    return transaction;
  }

  async createTransaction({
    description,
    name,
    type,
    value,
    balanceId,
  }: TransactionNM.Input): Promise<TransactionNM.Output> {
    const transaction = this.transactionRepository.create({
      name,
      description,
      value,
      type,
      balanceId,
    });

    await this.transactionRepository.save(transaction);

    return transaction;
  }
}
