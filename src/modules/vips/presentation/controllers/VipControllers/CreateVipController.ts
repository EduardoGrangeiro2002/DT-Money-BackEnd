import { ICreateVip } from "modules/vips/domain/features/ICreateVip";

import { Http, IController, statusError, statusSuccess } from "../../contracts";

export class CreateVipController implements IController {
  constructor(private readonly createVipService: ICreateVip) {}
  async handle(request?: Http.Request): Promise<Http.Response<void>> {
    try {
      const { value, price } = request.body;

      await this.createVipService.create({ price, value });

      return statusSuccess();
    } catch (error) {
      return statusError(error);
    }
  }
}
