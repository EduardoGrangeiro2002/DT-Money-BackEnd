import { Router } from "express";

import { UserRouter } from "./User.routes";

const routes = Router();

routes.use("/users", UserRouter);
