import { CreateTransactionService } from "modules/economic/dataLayers/services/CreateTransactionServices";
import { UpdateBalanceService } from "modules/economic/dataLayers/services/UpdateBalanceService";
import { IController } from "modules/economic/presentation/contracts";
import { CreateTransactionController } from "modules/economic/presentation/controllers";

import {
  MakeBalanceRepository,
  MakeTransactionRepository,
} from "../../repositories";

export const MakeCreateTransactionController = (): IController => {
  const repoBalance = MakeBalanceRepository.getInstance();
  const repoTransaction = MakeTransactionRepository.getInstance();
  const createTransactionService = new CreateTransactionService(
    repoTransaction
  );
  const updateBalanceService = new UpdateBalanceService(repoBalance);

  const createTransactionController = new CreateTransactionController(
    createTransactionService,
    updateBalanceService
  );

  return createTransactionController;
};
