import { IVipRepository } from "modules/vips/dataLayers/interfaces/IVipRepository";
import { VipRepository } from "modules/vips/infra/typeorm/repositories/VipRepository";

export class MakeRepositoryVip {
  static instance?: IVipRepository;

  static getInstance(): IVipRepository {
    if (!this.instance) {
      this.instance = new VipRepository();
    }
    return this.instance;
  }
}
