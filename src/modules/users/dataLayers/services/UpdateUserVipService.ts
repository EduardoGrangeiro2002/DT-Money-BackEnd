import { IUpdateVipUserById, UserVip } from "modules/users/domain/features";
import AppError from "shared/errors/AppError";

import { IUserRepository } from "../interfaces/IUserRepository";
import { IUserProfileMapper } from "../mapper/UserProfileMapper";

export class UpdateUserVipService implements IUpdateVipUserById {
  constructor(
    private userRepository: IUserRepository,
    private vipRepository: IVipRepository,
    private userProfileMapper: IUserProfileMapper
  ) {}
  async updateVip({ id }: UserVip.Input): Promise<UserVip.ProfileOutput> {
    const user = await this.userRepository.findUserById(id);

    const vip = await this.vipRepository.findVipByUserId(id);

    if (!user) throw new AppError("User not exists");

    user.vip = `${vip}`;

    await this.userRepository.save(user);

    const userToDTO = await this.userProfileMapper.toDTO(user);

    return userToDTO;
  }
}
