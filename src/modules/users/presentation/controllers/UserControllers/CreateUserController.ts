import { ICreateBalanceByUser } from "modules/economic/domain/features/ICreateBalanceByUser";

import { ICreateUser } from "../../../domain/features";
import { Http, statusError, statusSuccess, IController } from "../../contracts";

export class CreateUserController implements IController {
  constructor(
    private readonly createUserService: ICreateUser,
    private readonly createBalanceService: ICreateBalanceByUser
  ) {}
  async handle(request: Http.Request): Promise<Http.Response<void>> {
    try {
      const { name, email, password } = request.body;
      const user = await this.createUserService.create({
        email,
        name,
        password,
      });

      await this.createBalanceService.createBalanceByUser(user.id);

      return statusSuccess();
    } catch (error) {
      return statusError(error);
    }
  }
}
