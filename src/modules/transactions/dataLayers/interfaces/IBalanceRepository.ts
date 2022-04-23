import { BalanceModels } from "../models/BalanceModels";

export interface IBalanceRepository {
  findByUserId(user_id: string): Promise<BalanceModels>;
  updateBalance(balance: BalanceModels): Promise<BalanceModels>;
}
