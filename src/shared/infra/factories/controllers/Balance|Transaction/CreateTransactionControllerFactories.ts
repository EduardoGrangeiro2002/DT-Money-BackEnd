import { CreateTransactionService } from "modules/transactions/dataLayers/services/CreateTransactionServices";
import { UpdateBalanceService } from "modules/transactions/dataLayers/services/UpdateBalanceService";
import { IController } from "modules/transactions/presentation/contracts";
import { CreateTransactionController } from "modules/transactions/presentation/controllers";

import { MakeBalanceRepository } from "../../repositories";
import { MakeTransactionRepository } from "../../repositories/makeRepositoryTransaction";

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
