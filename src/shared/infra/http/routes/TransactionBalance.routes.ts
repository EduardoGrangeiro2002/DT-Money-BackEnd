import { Router } from "express";
import {
  MakeCreateTransactionController,
  MakeReUpdateBalanceController,
} from "shared/infra/factories/controllers";

import { adaptRoute } from "../adapterRoutes";

const createTransactionController = MakeCreateTransactionController();
const reUpdateBalanceController = MakeReUpdateBalanceController();
export const transactionBalance = Router();

transactionBalance.post("/create", adaptRoute(createTransactionController));
transactionBalance.get("/re-update", adaptRoute(reUpdateBalanceController));
