import { TransactionProps, Type } from "../entities/Transaction";

export interface ICreateTransaction {
  createTransaction({
    name,
    balanceId,
    value,
    type,
    description,
  }: TransactionNM.Input): Promise<TransactionNM.Output>;
}

export namespace TransactionNM {
  export type Input = {
    balanceId: string;
    name: string;
    value: number;
    type: Type;
    description: string;
  };

  export type Output = TransactionProps;
}
