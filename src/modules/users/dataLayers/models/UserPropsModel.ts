import { UserDTO, UserProps } from "modules/users/domain/entities/User";

export namespace UserModel {
  export type Input = UserProps;

  export type Output = UserDTO;
}
