import { Balance } from "../entities";

export interface IReUpdateBalance {
  ReUpdateBalance: (balanceId: string) => Promise<Balance>;
}
