import { Balance } from "../entities";
import { TransactionProps } from "../entities/Transaction";

export interface IUpdateBalance {
  update(data: TransactionProps): Promise<Balance>;
}
