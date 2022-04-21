import { ISessionsUser } from "modules/users/domain/features";

import { Http, IController, statusError, statusSuccess } from "../../contracts";

export class SessionsUserController implements IController {
  constructor(private readonly sessionsUserService: ISessionsUser) {}
  async handle(request?: Http.Request<any>): Promise<Http.Response<any>> {
    try {
      const { password, email } = request.body;

      const user = await this.sessionsUserService.sessions({ password, email });

      return statusSuccess(user);
    } catch (error) {
      return statusError(error);
    }
  }
}
