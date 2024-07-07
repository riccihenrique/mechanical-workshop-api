import { Sequelize, DataTypes, Model, InferAttributes, InferCreationAttributes, Association, NonAttribute, CreationOptional } from 'sequelize';
import { AddressModel } from './Address.model';
import { MechanicalWorkshop } from '../../app/entities/MechanicalWorkshop';

export class MechanicalWorkshopModel extends Model<
InferAttributes<MechanicalWorkshopModel>,
InferCreationAttributes<MechanicalWorkshopModel>
> {
  public id!: CreationOptional<string>;
  public name!: string;
  public addressId!: string;
  public createdAt!: CreationOptional<Date>;
  public updatedAt!: CreationOptional<Date>;;
  public deletedAt!: CreationOptional<Date>;;

  public address!: NonAttribute<AddressModel>;

  public static initInstance(sequelize: Sequelize) {
    super.init({
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      addressId: {
        type: DataTypes.INTEGER,
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

  static readonly associations: {
    address: Association<MechanicalWorkshopModel, AddressModel>;
  };

  static associate() {
    this.belongsTo(AddressModel, {
      foreignKey: 'addressId',
      as: 'address'
    });
  }
}