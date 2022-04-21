import { IHashData } from "shared/infra/container/providers/crypto/IHashData";
import { BcryptHashData } from "shared/infra/container/providers/implementations/BcryptHashData";

export class MakeCryptoHash {
  static instance?: IHashData;

  static getInstance(): IHashData {
    if (!this.instance) {
      this.instance = new BcryptHashData();
    }
    return this.instance;
  }
}
