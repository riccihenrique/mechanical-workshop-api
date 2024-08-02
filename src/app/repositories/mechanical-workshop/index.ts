import { MechanicalWorkshop } from "../../entities/MechanicalWorkshop";
import { IMechanicalWorkshopRepository } from "../../interfaces/repositories/mechanical-workshop";
import { MechanicalWorkshopModel } from "../../../database/models/MechanicalWorkshop.model";
import { AddressModel } from "../../../database/models/Address.model";
import { MechanicalWorkshopBaseRepository } from "./mechanical-workshop-base-repository";
import { databaseSingleton } from "../../../database";
import { QueryTypes } from "sequelize";

export class MechanicalWorkshopRepository extends MechanicalWorkshopBaseRepository implements IMechanicalWorkshopRepository {
  async findByLocation(lat: number, long: number, distance: number): Promise<MechanicalWorkshop[]> {
    const [procedureResult] = await databaseSingleton.databaseInstance.query('CALL get_mechanical_workshops_by_distance(:lat, :long, :distance)', {
      replacements: {
        lat,
        long,
        distance,
      },
      type: QueryTypes.SELECT,
    });


    const mechanicalWorkshops = Object.values(procedureResult).map((result: any) => {
      return this.formatToEntity({
        id: result.id,
        name: result.name,
        address: {
          id: result.addressId,
          street: result.street,
          city: result.city,
          state: result.state,
          zip: result.zip,
          latitude: result.latitude,
          longitude: result.longitude,
          createdAt: result.addressCreatedAt,
          updatedAt: result.addressUpdatedAt,
          deletedAt: result.addressDeletedAt,
        },
        createdAt: result.createdAt,
        updatedAt: result.updatedAt,
        deletedAt: result.deletedAt,
      } as MechanicalWorkshopModel);
    });

    return mechanicalWorkshops;
  }

  async create(data: { name: string; street: string; city: string; state: string; zip: string; latitude: number; longitude: number }): Promise<MechanicalWorkshop> {
    const address = await AddressModel.create({
      street: data.street,
      city: data.city,
      state: data.state,
      zip: data.zip,
      latitude: data.latitude,
      longitude: data.longitude,
    });

    const mechanicalWorkshop = await MechanicalWorkshopModel.create({
      name: data.name,
      addressId: address.id,
    });

    mechanicalWorkshop.address = address;

    return this.formatToEntity(mechanicalWorkshop);
  }

  async update(idMechanical: string, idAddress: string, data: { name: string; street: string; city: string; state: string; zip: string; }): Promise<void> {
    await AddressModel.update({
      street: data.street,
      city: data.city,
      state: data.state,
      zip: data.zip,
    }, {
      where: {
        id: idAddress,
      },
    });

    await MechanicalWorkshopModel.update({
      name: data.name,
    }, {
      where: {
        id: idMechanical,
      },
    });
  }

  async deleteById(id: string): Promise<void> {
    await MechanicalWorkshopModel.destroy({
      where: {
        id,
      },
    });
  }

  async findById(id: string): Promise<MechanicalWorkshop | null> {
    const mechanicalWorkshop = await MechanicalWorkshopModel.findByPk(id,
      {
        include: [
          {
            model: AddressModel,
            as: "address",
            required: true,
          },
        ],
      });

    if (!mechanicalWorkshop) {
      return null;
    }

    return this.formatToEntity(mechanicalWorkshop);
  }

  async list(): Promise<MechanicalWorkshop[]> {
    const data = await  MechanicalWorkshopModel.findAll({
      include: [
        {
          model: AddressModel,
          as: "address",
          required: true,
        },
      ],
    });

    return data.map((mechanicalWorkshop) => this.formatToEntity(mechanicalWorkshop));
  }
}