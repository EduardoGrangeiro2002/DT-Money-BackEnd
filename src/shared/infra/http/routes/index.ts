import { Router } from "express";

import { userRoutes } from "./User.routes";

export const routes = Router();

routes.use("/users", userRoutes);
