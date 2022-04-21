import {
  CreateVip,
  ICreateVip,
} from "modules/users/domain/features/ICreateVip";
import AppError from "shared/errors/AppError";

import { IVipRepository } from "../interfaces/IVipRepository";

export class CreateVipService implements ICreateVip {
  constructor(private vipRepository: IVipRepository) {}

  async create({ price, value }: CreateVip.Input): Promise<void> {
    const vip = await this.vipRepository.findVipByValue(value);

    if (vip) throw new AppError("Vip already registered!");

    if (value !== "diamond" && value !== "gold" && value !== "prata") {
      throw new AppError("Valor não permitido para vip");
    }

    await this.vipRepository.createVip({ price, value });
  }
}
