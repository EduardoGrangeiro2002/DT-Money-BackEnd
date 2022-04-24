import { BalanceModels } from "modules/economic/dataLayers/models/BalanceModels";
import { IUpdateBalance } from "modules/economic/domain/features";
import { ICreateTransaction } from "modules/economic/domain/features/ICreateTransaction";
import { Http, IController } from "modules/users/presentation/contracts";

import { statusError, statusSuccess } from "../../contracts";

export class CreateTransactionController implements IController {
  constructor(
    private createTransactionService: ICreateTransaction,
    private updateBalanceService: IUpdateBalance
  ) {}
  async handle(request?: Http.Request): Promise<Http.Response<BalanceModels>> {
    try {
      const { name, description, value, type, userId } = request.body;
      const transaction = await this.createTransactionService.createTransaction(
        {
          description,
          name,
          type,
          value,
          userId,
        }
      );

      const balance = await this.updateBalanceService.update(transaction);

      return statusSuccess(balance);
    } catch (error) {
      return statusError(error);
    }
  }
}
