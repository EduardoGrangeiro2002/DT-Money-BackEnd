import { ITransactionRepository } from "modules/economic/dataLayers/interfaces/ITransactionRepository";
import { Transaction } from "modules/economic/domain/features/ICreateTransaction";
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
    userId,
  }: Transaction.Input): Promise<Transaction.Output> {
    const transaction = this.transactionRepository.create({
      name,
      description,
      value,
      type,
      userId,
    });

    await this.transactionRepository.save(transaction);

    return transaction;
  }
}