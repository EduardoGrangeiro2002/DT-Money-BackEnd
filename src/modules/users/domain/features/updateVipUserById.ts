import { Vip } from "../entities/User";

export interface IUpdateVipUserById {
  updateVip: ({ id }: UserVip.Input) => Promise<UserVip.ProfileOutput>;
}
export namespace UserVip {
  export type Input = {
    id: string;
  };

  export type ProfileOutput = {
    id: string;
    vip: string;
    name: string;
    avatar: string;
    avatarUrl: string;
  };
}
