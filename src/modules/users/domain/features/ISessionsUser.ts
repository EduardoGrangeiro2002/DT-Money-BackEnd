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
      name: string;
      vipId: string;
      avatarUrl: string;
    };
  };
}
