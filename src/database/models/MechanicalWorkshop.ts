// @ts-nocheck
import { Sequelize, DataTypes, Model } from 'sequelize';

export class MechanicalWorkshop extends Model {
  public id!: number;
  public name!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
  public deletedAt!: Date;

  public static init(sequelize: Sequelize) {
    super.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    }, {
      sequelize,
      tableName: "tb_mechanical_workshops",
      deletedAt: "deletedAt",
      paranoid: true,
    });
  }
}