import { Router } from "express";
import { MakeGetUserProfileController } from "shared/infra/factories/controllers/User/GetUserProfilleControllerFactories";
import { MakeSessionsUserController } from "shared/infra/factories/controllers/User/SessionsUserControllerFactories";

import { makeCreateUserController } from "../../factories/controllers";
import { adaptRoute } from "../adapterRoutes";

const createUsersController = makeCreateUserController();
const getUserProfileController = MakeGetUserProfileController();
const sessionsUserController = MakeSessionsUserController();
export const userRoutes = Router();

userRoutes.post("/", adaptRoute(createUsersController));
userRoutes.get("/:id", adaptRoute(getUserProfileController));
userRoutes.post("/sessions", adaptRoute(sessionsUserController));
