import { Transaction } from "modules/economic/domain/entities";

import { TransactionCreate } from "../models/TransactionCreate";

export interface ITransactionRepository {
  createTransaction({
    description,
    name,
    type,
    value,
    balanceId,
  }: TransactionCreate.Input): Promise<TransactionCreate.Output>;

  findTransactionsByBalanceId: (id: string) => Promise<Transaction[]>;
}
