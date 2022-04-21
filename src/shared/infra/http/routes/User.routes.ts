import { Router } from "express";
import { MakeGetUserProfileController } from "shared/infra/factories/controllers/User/GetUserProfilleControllerFactories";

import { makeCreateUserController } from "../../factories/controllers";
import { adaptRoute } from "../adapterRoutes";

const createUsersController = makeCreateUserController();
const getUserProfileController = MakeGetUserProfileController();
export const userRoutes = Router();

userRoutes.post("/", adaptRoute(createUsersController));
userRoutes.get("/:id", adaptRoute(getUserProfileController));
