import { Router } from "express";
import { CreateUserController } from "modules/users/presentation/controllers/CreateUserController";

export const UserRouter = Router();
const createUserController = new CreateUserController();

UserRouter.post("/");
