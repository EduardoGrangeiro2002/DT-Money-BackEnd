import { IBalanceRepository } from "modules/economic/dataLayers/interfaces/IBalanceRepository";
import { BalanceRepository } from "modules/economic/infra/typeorm/repositories/BalanceRepository";

export class MakeBalanceRepository {
  private static instance?: IBalanceRepository;

  static getInstance(): IBalanceRepository {
    if (!this.instance) {
      this.instance = new BalanceRepository();
    }
    return this.instance;
  }
}
