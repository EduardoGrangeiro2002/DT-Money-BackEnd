import { Router } from "express";
import { MakeCreateVipController } from "shared/infra/factories/controllers/Vip/MakeCreateVipController";

import { adaptRoute } from "../adapterRoutes";

export const VipRoutes = Router();
const createVipController = MakeCreateVipController();

VipRoutes.post("/", adaptRoute(createVipController));
