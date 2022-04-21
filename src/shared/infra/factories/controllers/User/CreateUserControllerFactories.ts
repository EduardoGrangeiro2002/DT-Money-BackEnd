import { CreateUserService } from "../../../../../modules/users/dataLayers/services/CreateUserService";
import { IController } from "../../../../../modules/users/presentation/contracts/IController";
import { CreateUserController } from "../../../../../modules/users/presentation/controllers/UserControllers";
import { MakeUserRepository } from "../../repositories";

export const makeCreateUserController = (): IController => {
  const repo = MakeUserRepository.getInstance();
  const service = new CreateUserService(repo);
  return new CreateUserController(service);
};
