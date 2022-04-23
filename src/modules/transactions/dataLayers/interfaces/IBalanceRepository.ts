import { BalanceModels } from "../models/BalanceRepository";

export interface IBalanceRepository {
  findByUserId(user_id: string): Promise<BalanceModels>;
  updateBalance(id: string): Promise<BalanceModels>;
}
