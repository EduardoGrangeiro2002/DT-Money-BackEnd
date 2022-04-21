export interface IHashData {
  hashData: (data: string) => Promise<string>;

  compareHashData: (payload: string, hashed: string) => Promise<boolean>;
}
