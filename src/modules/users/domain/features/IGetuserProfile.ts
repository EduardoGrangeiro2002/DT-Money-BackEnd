export interface IGetUserProfile {
  getProfile: (id: string) => Promise<ResponseProfile>;
}

export type ResponseProfile = {
  id: string;
  vip: string;
  avatarUrl: string;
  name: string;
};
