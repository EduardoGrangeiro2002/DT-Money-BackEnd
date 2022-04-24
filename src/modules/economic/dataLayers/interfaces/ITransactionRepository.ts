import { TransactionCreate } from "../models/TransactionCreate";

export interface ITransactionRepository {
  createTransaction({
    description,
    name,
    type,
    value,
    userId,
  }: TransactionCreate.Input): Promise<TransactionCreate.Output>;
}
