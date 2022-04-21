import { compare, hash } from "bcrypt";

import { IHashData } from "../crypto/IHashData";

export class BcryptHashData implements IHashData {
  compareHashData(payload: string, hashed: string): Promise<boolean> {
    return compare(payload, hashed);
  }
  async hashData(data: string): Promise<string> {
    return hash(data, 8);
  }
}
