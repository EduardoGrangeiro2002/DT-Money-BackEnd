import { IGetUserProfile } from "modules/users/domain/features";

import { Http, IController, statusError, statusSuccess } from "../../contracts";

export class GetUserProfileController implements IController {
  constructor(private readonly getUserProfileService: IGetUserProfile) {}

  async handle(request?: Http.Request<any>): Promise<Http.Response<any>> {
    try {
      const { id } = request.params;

      const user = await this.getUserProfileService.getProfile(id);

      return statusSuccess(user);
    } catch (error) {
      return statusError(error);
    }
  }
}
