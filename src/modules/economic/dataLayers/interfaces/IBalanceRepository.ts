import { BalanceModels, BalanceModelsCreate } from "../models/BalanceModels";

export interface IBalanceRepository {
  findById(userId: string): Promise<BalanceModels>;
  updateBalance(balance: BalanceModels): Promise<BalanceModels>;
  createBalance({
    userId,
    balance,
  }: BalanceModelsCreate): Promise<BalanceModels>;
}
