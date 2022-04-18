import { UserModel } from "../models";

export interface IUserProfileMapper {
  toDTO: (data: UserModel.Input) => UserModel.OutputProfile;
}
