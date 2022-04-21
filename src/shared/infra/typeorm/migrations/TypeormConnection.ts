import { User } from "modules/users/infra/typeorm/entities/User";
import { Vip } from "modules/vips/infra/typeorm/entities/Vip";
import {
  Connection,
  ConnectionOptions,
  createConnection,
  getConnectionOptions,
} from "typeorm";

export type ConnectDTO = {
  host?: string;
  username?: string;
  password?: string;
  database?: string;
};

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class TypeormConnect {
  static connection?: Connection;

  private static connectionName: string;

  static async connect(props?: ConnectDTO): Promise<void> {
    if (
      this.connection == null ??
      this.connection?.name !== this.connectionName
    ) {
      const options = await this.getOptions();

      // remove migrations to prvent error on test
      // ReferenceError: You are trying to `import` a file after the Jest environment has been torn down.
      this.connection = await createConnection(options);
    }
  }

  private static async getOptions(
    props?: ConnectDTO
  ): Promise<ConnectionOptions> {
    const options = await getConnectionOptions();

    return Object.assign(options, props, {
      entities: [User, Vip],
    });
  }

  static async disconnect(): Promise<void> {
    await this.connection?.close();
    this.connection = undefined;
    this.connectionName = "";
  }

  static async query(query: string, params?: any[]): Promise<any> {
    try {
      return this.connection?.query(query, params);
    } catch (e) {
      console.log(query, params);
      throw e;
    }
  }

  static getConnection(): Connection {
    if (this.connection == null) {
      throw new Error("Connection not found");
    }
    return this.connection;
  }
}
