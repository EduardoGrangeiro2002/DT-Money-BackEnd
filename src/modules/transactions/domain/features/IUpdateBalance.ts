import { TransactionProps } from "../entities/Transaction";

export interface IUpdateBalance {
  update(transaction: TransactionProps);
}
