import { Router } from "express";
import { MakeCreateVipController } from "shared/infra/factories/controllers";

import { adaptRoute } from "../adapterRoutes";
import { isAuthenticate } from "../middlewares/isAuthenticated";

export const VipRoutes = Router();
const createVipController = MakeCreateVipController();

VipRoutes.post("/", isAuthenticate, adaptRoute(createVipController));
