import { IGetUserProfile } from "modules/users/domain/features/IGetuserProfile";
import AppError from "shared/errors/AppError";

import { ResponseProfile } from "../../domain/features";
import { IUserRepository } from "../interfaces/IUserRepository";

export class GetUserProfileService implements IGetUserProfile {
  constructor(private readonly userRepository: IUserRepository) {}
  async getProfile(id: string): Promise<ResponseProfile> {
    const userProfile = await this.userRepository.findUserById(id);
    if (!userProfile) throw new AppError("User does not exists!");

    const { name, vip, id: userId } = userProfile.toDto();

    const avatarUrl = userProfile.getAvatarUrl();

    const userResponse = {
      name,
      vip,
      id: userId,
      avatarUrl,
    };

    return userResponse;
  }
}
