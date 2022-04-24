import { Router } from "express";
import { MakeCreateVipController } from "shared/infra/factories/controllers";

import { adaptRoute } from "../adapterRoutes";

export const VipRoutes = Router();
const createVipController = MakeCreateVipController();

VipRoutes.post("/", adaptRoute(createVipController));
