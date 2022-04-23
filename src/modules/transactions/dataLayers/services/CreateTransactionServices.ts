import { ICreateTransaction } from "modules/transactions/domain/features/ICreateTransaction";
import AppError from "shared/errors/AppError";

import { ITransactionRepository } from "../interfaces/ITransactionRepository";
import { TransactionCreate } from "../models/TransactionCreate";

export class CreateTransactionService implements ICreateTransaction {
  constructor(private readonly transactionRepository: ITransactionRepository) {}
  async createTransaction({
    name,
    value,
    type,
    description,
    userId,
  }: TransactionCreate.Input): Promise<TransactionCreate.Output> {
    if (type !== "deposit" && type !== "withdraw") {
      throw new AppError("Tipo de transação não existente");
    }
    if (value < 0) {
      throw new AppError("Valor da transação nao pode ser negativo");
    }
    const transaction = await this.transactionRepository.createTransaction({
      description,
      name,
      type,
      value,
      userId,
    });

    return transaction;
  }
}
