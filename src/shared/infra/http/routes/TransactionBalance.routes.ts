import { Router } from "express";
import { MakeCreateTransactionController } from "shared/infra/factories/controllers";

import { adaptRoute } from "../adapterRoutes";

const createTransactionController = MakeCreateTransactionController();
export const transactionBalance = Router();

transactionBalance.post("/create", adaptRoute(createTransactionController));
