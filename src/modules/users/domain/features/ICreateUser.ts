import { UserProps } from "../entities";

export interface ICreateUser {
  create: ({ email, name, password }: CreateUser.Input) => Promise<UserProps>;
}

export namespace CreateUser {
  export type Input = {
    email: string;
    name: string;
    password: string;
  };
}
