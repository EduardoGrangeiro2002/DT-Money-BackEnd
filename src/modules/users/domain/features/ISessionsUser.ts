export interface ISessionsUser {
  sessions({ email, password }: Sessions.Input): Promise<Sessions.Output>;
}

export namespace Sessions {
  export type Input = {
    password: string;
    email: string;
  };
  export type Output = {
    token: string;

    user: {
      id: string;
      name: string;
      vip: string;
      avatarUrl: string;
    };
  };
}
