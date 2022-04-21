import { IVipRepository } from "modules/vips/dataLayers/interfaces/IVipRepository";
import {
  VipModel,
  valueModel,
} from "modules/vips/dataLayers/models/VipPropsModels";
import { getRepository, Repository } from "typeorm";

import { Vip } from "../entities/Vip";

export class VipRepository implements IVipRepository {
  private readonly vipRepository: Repository<Vip>;
  constructor() {
    this.vipRepository = getRepository(Vip);
  }
  async createVip({ price, value }: VipModel.Input): Promise<void> {
    const vip = this.vipRepository.create({ price, value });

    await this.vipRepository.save(vip);
  }

  async findVipByValue(value: valueModel): Promise<VipModel.Output> {
    const vip = await this.vipRepository.findOne({ value });

    return vip;
  }
}
