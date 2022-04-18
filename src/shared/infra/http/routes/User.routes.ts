import { Router } from "express";

import { makeCreateUserController } from "../../factories/controllers";
import { adaptRoute } from "../adapterRoutes";

const createUsersController = makeCreateUserController();
export const userRoutes = Router();

userRoutes.post("/", adaptRoute(createUsersController));
