import { Sequelize, DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import { Address } from '../../app/entities/Address';

export class AddressModel extends Model<
InferAttributes<AddressModel>,
InferCreationAttributes<AddressModel>
> {
  public id!: CreationOptional<string>;
  public street!: string;
  public city!: string;
  public state!: string;
  public zip!: string;
  public latitude!: number;
  public longitude!: number;
  public readonly createdAt!: CreationOptional<Date>;
  public readonly updatedAt!: CreationOptional<Date>;
  public readonly deletedAt!: CreationOptional<Date>;

  static initInstance(sequelize: Sequelize) {
    super.init({
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
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
      latitude: {
        type: DataTypes.DECIMAL(10, 8),
        allowNull: true,
      },
      longitude: {
        type: DataTypes.DECIMAL(10, 8),
        allowNull: true,
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    }, {
      sequelize,
      tableName: "tb_addresses",
      deletedAt: "deletedAt",
      paranoid: true,
    });
  }
}