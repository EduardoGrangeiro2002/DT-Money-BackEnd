import { IBalanceRepository } from "modules/transactions/dataLayers/interfaces/IBalanceRepository";
import { Balance } from "modules/transactions/domain/entities";
import { getRepository, Repository } from "typeorm";

import { BalanceORM } from "../entities/Balance";

export class BalanceRepository implements IBalanceRepository {
  private readonly balancerepository: Repository<BalanceORM>;

  constructor() {
    this.balancerepository = getRepository(BalanceORM);
  }
  async findByUserId(userId: string): Promise<Balance> {
    const balance = await this.balancerepository.findOne({ userId });

    return balance;
  }
  async updateBalance(balance: Balance): Promise<Balance> {
    await this.balancerepository.save(balance);

    return balance;
  }
}
