import { SessionsUserService } from "modules/users/dataLayers/services/SessionsUserService";
import { IController } from "modules/users/presentation/contracts";
import { SessionsUserController } from "modules/users/presentation/controllers/UserControllers/SessionsUserController";

import { MakeCryptoHash } from "../../providers";
import { MakeUserRepository } from "../../repositories";

export const MakeSessionsUserController = (): IController => {
  const repo = MakeUserRepository.getInstance();
  const hashData = MakeCryptoHash.getInstance();
  const sessionsUserService = new SessionsUserService(repo, hashData);
  const sessionsUserController = new SessionsUserController(
    sessionsUserService
  );

  return sessionsUserController;
};
