import { BalanceModels, BalanceModelsCreate } from "../models/BalanceModels";

export interface IBalanceRepository {
  findByUserId(userId: string): Promise<BalanceModels>;
  updateBalance(balance: BalanceModels): Promise<BalanceModels>;
  createBalance({
    userId,
    balance,
  }: BalanceModelsCreate): Promise<BalanceModels>;
}
