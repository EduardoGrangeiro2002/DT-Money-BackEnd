import { TransactionCreate } from "../models/TransactionCreate";

export interface ITransactionRepository {
  createTransaction({
    description,
    name,
    type,
    value,
  }: TransactionCreate.Input): Promise<TransactionCreate.Output>;
}
