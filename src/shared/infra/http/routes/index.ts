import { Router } from "express";

import { userRoutes } from "./User.routes";
import { VipRoutes } from "./Vip.routes";

export const routes = Router();

routes.use("/users", userRoutes);
routes.use("/vips", VipRoutes);
