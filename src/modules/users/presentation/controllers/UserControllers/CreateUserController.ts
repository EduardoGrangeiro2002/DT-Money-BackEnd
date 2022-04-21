import { ICreateUser } from "../../../domain/features";
import { Http, statusError, statusSuccess, IController } from "../../contracts";

export class CreateUserController implements IController {
  constructor(private readonly createUserService: ICreateUser) {}
  async handle(request: Http.Request): Promise<Http.Response<void>> {
    try {
      const { name, email, password } = request.body;
      await this.createUserService.create({ email, name, password });

      return statusSuccess();
    } catch (error) {
      return statusError(error);
    }
  }
}
