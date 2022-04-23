import { TransactionProps } from "modules/transactions/domain/entities/Transaction";
import { IUpdateBalance } from "modules/transactions/domain/features";

export class UpdateBalanceService implements IUpdateBalance {
  constructor(private readonly balanceRepository) {}
  update(transaction: TransactionProps) {}
}
