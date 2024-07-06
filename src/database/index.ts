import { Sequelize } from "sequelize";
import { sequelizeModels } from "./models";

interface IDatabaseAdapter<T> {
  databaseInstance: T;
  init(): Promise<void>;
}

export class SequelizeDatabase implements IDatabaseAdapter<Sequelize> {
  databaseInstance: Sequelize;

  constructor() {
    const connectionStr = `mysql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}`;
    this.databaseInstance = new Sequelize(connectionStr);
  }

    async init(): Promise<void> {
      sequelizeModels.forEach((model) => {
        model.init(this.databaseInstance);
      });
    }
}

export const databaseSingleton = new SequelizeDatabase();