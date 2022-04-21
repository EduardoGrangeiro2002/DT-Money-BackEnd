import { valueModel, VipModel } from "../models/VipPropsModels";

export interface IVipRepository {
  createVip: ({ price, value }: VipModel.Input) => Promise<void>;
  findVipByValue: (value: valueModel) => Promise<VipModel.Output>;
}
