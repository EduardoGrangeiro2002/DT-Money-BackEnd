import { Transaction } from "modules/transactions/domain/features/ICreateTransaction";

export namespace TransactionCreate {
  export type Input = Transaction.Input;
  export type Output = Transaction.Output;
}
