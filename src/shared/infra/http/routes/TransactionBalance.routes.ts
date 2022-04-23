import { Router } from "express";
import { MakeCreateTransactionController } from "shared/infra/factories/controllers";

import { adaptRoute } from "../adapterRoutes";

export const transactionBalance = Router();

const createTransactionController = MakeCreateTransactionController();

transactionBalance.post("/create", adaptRoute(createTransactionController));
