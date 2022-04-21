import { GetUserProfileService } from "modules/users/dataLayers/services";
import { IController } from "modules/users/presentation/contracts";
import { GetUserProfileController } from "modules/users/presentation/controllers";

import { MakeUserRepository } from "../../repositories";

export const MakeGetUserProfileController = (): IController => {
  const repo = MakeUserRepository.getInstance();
  const getUserProfileService = new GetUserProfileService(repo);
  const getUserProfileController = new GetUserProfileController(
    getUserProfileService
  );
  return getUserProfileController;
};
