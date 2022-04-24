import { ITransactionRepository } from "modules/economic/dataLayers/interfaces/ITransactionRepository";
import { TransactionRepository } from "modules/economic/infra/typeorm/repositories/TransactionRepository";

export class MakeTransactionRepository {
  private static instance?: ITransactionRepository;

  static getInstance(): ITransactionRepository {
    if (!this.instance) {
      this.instance = new TransactionRepository();
    }
    return this.instance;
  }
}
