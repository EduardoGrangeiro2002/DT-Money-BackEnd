import { IBalanceRepository } from "modules/transactions/dataLayers/interfaces/IBalanceRepository";
import { BalanceRepository } from "modules/transactions/infra/typeorm/repositories/BalanceRepository";

export class MakeBalanceRepository {
  private static instance?: IBalanceRepository;

  static getInstance(): IBalanceRepository {
    if (this.instance) {
      this.instance = new BalanceRepository();
    }
    return this.instance;
  }
}
