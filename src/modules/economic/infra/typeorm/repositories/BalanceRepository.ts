import { IBalanceRepository } from "modules/economic/dataLayers/interfaces/IBalanceRepository";
import { BalanceModelsCreate } from "modules/economic/dataLayers/models/BalanceModels";
import { Balance } from "modules/economic/domain/entities";
import { getRepository, Repository } from "typeorm";

import { BalanceORM } from "../entities";

export class BalanceRepository implements IBalanceRepository {
  private readonly balancerepository: Repository<BalanceORM>;

  constructor() {
    this.balancerepository = getRepository(BalanceORM);
  }
  async findUserId(userId: string): Promise<Balance> {
    const balance = await this.balancerepository.findOne({ where: { userId } });

    return balance;
  }
  async createBalance({
    userId,
    balance,
  }: BalanceModelsCreate): Promise<Balance> {
    const BalanceAccount = this.balancerepository.create({ userId, balance });

    await this.balancerepository.save(BalanceAccount);

    return BalanceAccount;
  }
  async findById(id: string): Promise<Balance> {
    const balance = await this.balancerepository.findOne(id);

    return balance;
  }
  async updateBalance(balance: Balance): Promise<Balance> {
    await this.balancerepository.save(balance);

    return balance;
  }
}
