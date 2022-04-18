import { IUserRepository } from "modules/users/dataLayers/interfaces/IUserRepository";
import { UserRepository } from "modules/users/infra/typeorm/repositories/UserRepository";

export class MakeUserRepository {
  private static instance?: IUserRepository;

  static getInstance(): IUserRepository {
    if (!this.instance) {
      this.instance = new UserRepository();
    }
    return this.instance;
  }
}
