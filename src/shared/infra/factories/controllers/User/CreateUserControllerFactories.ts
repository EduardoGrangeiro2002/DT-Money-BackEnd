import { CreateUserService } from "../../../../../modules/users/dataLayers/services/CreateUserService";
import { IController } from "../../../../../modules/users/presentation/contracts/IController";
import { CreateUserController } from "../../../../../modules/users/presentation/controllers/UserControllers";
import { MakeCryptoHash } from "../../providers/MakeCryptoHash";
import { MakeUserRepository } from "../../repositories";

export const makeCreateUserController = (): IController => {
  const repo = MakeUserRepository.getInstance();
  const crypto = MakeCryptoHash.getInstance();
  const service = new CreateUserService(repo, crypto);
  return new CreateUserController(service);
};
