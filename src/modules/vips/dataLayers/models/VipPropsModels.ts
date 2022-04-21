import { Vip } from "modules/users/domain/entities";

export namespace VipModel {
  export type Input = {
    value: valueModel;
    price: number;
  };

  export type Output = Vip;
}

export type valueModel = "prata" | "gold" | "diamond";
