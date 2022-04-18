import { UserDTO } from "../entities/User";

export interface IGetUserProfile {
  getProfile: (id: string) => Promise<UserDTO>;
}
