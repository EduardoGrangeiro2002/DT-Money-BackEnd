export interface ICreateUser {
  create: ({ email, name, password }: CreateUser.Input) => Promise<void>;
}

export namespace CreateUser {
  export type Input = {
    email: string;
    name: string;
    password: string;
  };
}
