import { ReUpdateBalanceService } from "modules/economic/dataLayers/services/Re-UpdateBalanceService";
import { IController } from "modules/economic/presentation/contracts";
import { ReUpdateBalanceController } from "modules/economic/presentation/controllers/TransactionController/Re-UpdateBalanceController";

import {
  MakeBalanceRepository,
  MakeTransactionRepository,
} from "../../repositories";

export const MakeReUpdateBalanceController = (): IController => {
  const repoBalance = MakeBalanceRepository.getInstance();
  const repoTransaction = MakeTransactionRepository.getInstance();
  const reUpdateBalanceService = new ReUpdateBalanceService(
    repoTransaction,
    repoBalance
  );
  const reUpdateBalanceController = new ReUpdateBalanceController(
    reUpdateBalanceService
  );

  return reUpdateBalanceController;
};
