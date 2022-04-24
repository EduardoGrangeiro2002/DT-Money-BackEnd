import { CreateBalanceByUserService } from "modules/economic/dataLayers/services/CreateBalanceByUserService";

import { CreateUserService } from "../../../../../modules/users/dataLayers/services/CreateUserService";
import { IController } from "../../../../../modules/users/presentation/contracts/IController";
import { CreateUserController } from "../../../../../modules/users/presentation/controllers/UserControllers";
import { MakeCryptoHash } from "../../providers/MakeCryptoHash";
import { MakeBalanceRepository, MakeUserRepository } from "../../repositories";

export const makeCreateUserController = (): IController => {
  const repo = MakeUserRepository.getInstance();
  const repoBalance = MakeBalanceRepository.getInstance();
  const crypto = MakeCryptoHash.getInstance();
  const createBalanceService = new CreateBalanceByUserService(repoBalance);
  const createUserService = new CreateUserService(repo, crypto);
  return new CreateUserController(createUserService, createBalanceService);
};
