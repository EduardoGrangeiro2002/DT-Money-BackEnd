import { Balance } from "modules/economic/domain/entities";

export type BalanceModels = Balance;
export type BalanceModelsCreate = Pick<Balance, "userId" | "balance">;
