import { UserDTO } from "modules/users/domain/entities/User";
import { IGetUserProfile } from "modules/users/domain/features/IGetuserProfile";
import AppError from "shared/errors/AppError";

import { IUserRepository } from "../interfaces/IUserRepository";

export class GetUserProfileService implements IGetUserProfile {
  constructor(private readonly userRepository: IUserRepository) {}
  async getProfile(id: string): Promise<UserDTO> {
    const userProfile = await this.userRepository.findUserById(id);

    if (!userProfile) throw new AppError("User does not exists!");

    return userProfile;
  }
}
