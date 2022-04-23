import { IController } from "modules/users/presentation/contracts";
import { CreateVipService } from "modules/vips/dataLayers/services/CreateVipService";
import { CreateVipController } from "modules/vips/presentation/controllers";

import { MakeRepositoryVip } from "../../repositories/makeRepositoryVip";

export const MakeCreateVipController = (): IController => {
  const repo = MakeRepositoryVip.getInstance();
  const createVipService = new CreateVipService(repo);
  const createVipController = new CreateVipController(createVipService);
  return createVipController;
};
