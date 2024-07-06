// @ts-nocheck
import { Sequelize, DataTypes, Model } from 'sequelize';

export class Address extends Model {
  public id!: number;
  public street!: string;
  public city!: string;
  public state!: string;
  public zip!: string;
  public mechanicalWorkshopId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date | null;

  public static init(sequelize: Sequelize) {
    super.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      street: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      zip: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mechanicalWorkshopId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    }, {
      sequelize,
      tableName: "tb_addresses",
      deletedAt: "deletedAt",
      paranoid: true,
    });
  }
}