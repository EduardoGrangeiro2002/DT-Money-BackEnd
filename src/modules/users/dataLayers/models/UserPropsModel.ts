import { UserProps } from "modules/users/domain/entities/User";

export namespace UserModel {
  export type Input = UserProps;

  export type Output = UserProps;

  export type OutputProfile = {
    id: string;
    name: string;
    avatar: string;
    avatarUrl: string;
  };
}
