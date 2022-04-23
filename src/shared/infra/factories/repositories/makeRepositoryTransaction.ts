import { ITransactionRepository } from "modules/transactions/dataLayers/interfaces/ITransactionRepository";
import { TransactionRepository } from "modules/transactions/infra/typeorm/repositories/TransactionRepository";

export class MakeTransactionRepository {
  private static instance?: ITransactionRepository;

  static getInstance(): ITransactionRepository {
    if (!this.instance) {
      this.instance = new TransactionRepository();
    }
    return this.instance;
  }
}
