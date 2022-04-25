import { Balance } from "modules/economic/domain/entities";
import { IReUpdateBalance } from "modules/economic/domain/features/IRe-UpdateBalance";

import { Http, IController, statusError, statusSuccess } from "../../contracts";

export class ReUpdateBalanceController implements IController {
  constructor(private readonly reUpdateBalanceService: IReUpdateBalance) {}
  async handle(request?: Http.Request): Promise<Http.Response<Balance>> {
    try {
      const { balanceId } = request.body;

      const balance = await this.reUpdateBalanceService.ReUpdateBalance(
        balanceId
      );

      return statusSuccess(balance);
    } catch (error) {
      console.log(error);
      return statusError(error);
    }
  }
}
