import { PossibleValue, Vip } from "../entities/Vip";

export interface ICreateVip {
  create: (data: CreateVip.Input) => Promise<void>;
}

export namespace CreateVip {
  export type Input = {
    value: PossibleValue;
    price: number;
  };

  export type Output = Vip;
}
