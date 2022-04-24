import { TransactionProps, Type } from "../entities/Transaction";

export interface ICreateTransaction {
  createTransaction({
    name,
    userId,
    value,
    type,
    description,
  }: Transaction.Input): Promise<Transaction.Output>;
}

export namespace Transaction {
  export type Input = {
    userId: string;
    name: string;
    value: number;
    type: Type;
    description: string;
  };

  export type Output = TransactionProps;
}
