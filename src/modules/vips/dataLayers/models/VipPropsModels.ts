import { PossibleValue } from "modules/users/domain/entities";

export namespace VipModel {
  export type Input = {
    value: valueModel;
    price?: number;
  };

  export type Output = {
    id: string;
    value: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;
  };
}

export type valueModel = PossibleValue;
