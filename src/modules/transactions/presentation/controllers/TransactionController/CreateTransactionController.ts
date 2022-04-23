import { ICreateTransaction } from "modules/transactions/domain/features/ICreateTransaction";
import { Http, IController } from "modules/users/presentation/contracts";

export class CreateTransactionController implements IController {
  constructor(private createTransactionService: ICreateTransaction) {}
  async handle(request?: Http.Request<any>): Promise<Http.Response<any>> {
    try {
      const { name, description, value, type } = request.body;
      const transaction = await this.createTransactionService.createTransaction(
        {
          description,
          name,
          type,
          value,
        }
      );
    } catch (error) {}
  }
}
