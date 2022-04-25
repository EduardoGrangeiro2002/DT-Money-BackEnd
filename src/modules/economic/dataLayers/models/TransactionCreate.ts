import { TransactionNM } from "modules/economic/domain/features/ICreateTransaction";

export namespace TransactionCreate {
  export type Input = TransactionNM.Input;
  export type Output = TransactionNM.Output;
}
