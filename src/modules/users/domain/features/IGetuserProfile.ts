import { UserDTO } from "../entities/User";

export interface IGetUserProfile {
  execute: (id: string) => Promise<UserDTO>;
}
