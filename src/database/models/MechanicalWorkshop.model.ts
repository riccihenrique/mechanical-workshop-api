import { Sequelize, DataTypes, Model, InferAttributes, InferCreationAttributes, Association, NonAttribute, CreationOptional } from 'sequelize';
import { AddressModel } from './Address.model';
import { MechanicalWorkshop } from '../../app/entities/MechanicalWorkshop';

export class MechanicalWorkshopModel extends Model<
InferAttributes<MechanicalWorkshopModel>,
InferCreationAttributes<MechanicalWorkshopModel>
> {
  public id!: CreationOptional<number>;
  public name!: string;
  public addressId!: number;
  public createdAt!: CreationOptional<Date>;
  public updatedAt!: CreationOptional<Date>;;
  public deletedAt!: CreationOptional<Date>;;

  public address!: NonAttribute<AddressModel>;

  public static initInstance(sequelize: Sequelize) {
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
    MechanicalWorkshopModel.belongsTo(AddressModel, {
      foreignKey: 'addressId',
      as: 'address'
    });
  }

  public static formatToEntity(mechanicalWorkshop: MechanicalWorkshopModel): MechanicalWorkshop {
    return {
      id: mechanicalWorkshop.id,
      name: mechanicalWorkshop.name,
      address: AddressModel.formatToEntity(mechanicalWorkshop.address),
      createdAt: mechanicalWorkshop.createdAt,
      updatedAt: mechanicalWorkshop.updatedAt,
      deletedAt: mechanicalWorkshop.deletedAt
    }
  }
}