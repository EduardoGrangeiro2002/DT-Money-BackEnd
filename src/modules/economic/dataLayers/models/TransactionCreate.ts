import { Transaction } from "modules/economic/domain/features/ICreateTransaction";

export namespace TransactionCreate {
  export type Input = Transaction.Input;
  export type Output = Transaction.Output;
}
