import { ITransactionRepository } from "modules/transactions/dataLayers/interfaces/ITransactionRepository";
import { Transaction } from "modules/transactions/domain/features/ICreateTransaction";
import { getRepository, Repository } from "typeorm";

import { TransactionORM } from "../entities/Transaction";

export class TransactionRepository implements ITransactionRepository {
  private readonly transactionRepository: Repository<TransactionORM>;
  constructor() {
    this.transactionRepository = getRepository(TransactionORM);
  }
  async createTransaction({
    description,
    name,
    type,
    value,
  }: Transaction.Input): Promise<Transaction.Output> {
    const transaction = this.transactionRepository.create({
      name,
      description,
      value,
      type,
    });

    await this.transactionRepository.save(transaction);

    return transaction;
  }
}
