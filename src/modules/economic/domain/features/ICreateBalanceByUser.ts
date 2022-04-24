import { Balance } from "../entities";

export interface ICreateBalanceByUser {
  createBalanceByUser: (userId: string) => Promise<Balance>;
}
