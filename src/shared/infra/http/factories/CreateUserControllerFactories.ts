import { CreateUserService } from "../../../../modules/users/dataLayers/services/CreateUserService";
import { UserRepository } from "../../../../modules/users/infra/typeorm/repositories/UserRepository";
import { IController } from "../../../../modules/users/presentation/contracts/IController";
import { CreateUserController } from "../../../../modules/users/presentation/controllers/CreateUserController";

export const makeCreateUserController = (): IController => {
  const repo = new UserRepository();
  const service = new CreateUserService(repo);
  return new CreateUserController(service);
};
