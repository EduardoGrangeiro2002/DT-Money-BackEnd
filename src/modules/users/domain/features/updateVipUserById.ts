import { VipModel } from "modules/users/dataLayers/models/VipPropsModels";

export interface IUpdateVipUserById {
  updateVip: ({ id }: UserVip.Input) => Promise<UserVip.ProfileOutput>;
}
export namespace UserVip {
  export type Input = {
    id: string;
  };

  export type ProfileOutput = {
    id: string;
    name: string;
    avatar: string;
    avatarUrl: string;
    vip: VipModel.Output;
  };
}
