import { MechanicalWorkshop } from "../../entities/MechanicalWorkshop";
import { IMechanicalWorkshopRepository } from "../../interfaces/repositories/mechanical-workshop";
import { MechanicalWorkshopModel } from "../../../database/models/MechanicalWorkshop.model";
import { AddressModel } from "../../../database/models/Address.model";

export class MechanicalWorkshopRepository implements IMechanicalWorkshopRepository {
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

    return MechanicalWorkshopModel.formatToEntity(mechanicalWorkshop);
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

    return MechanicalWorkshopModel.formatToEntity(mechanicalWorkshop);
  }

  async list(): Promise<MechanicalWorkshop[]> {
    const data = await  MechanicalWorkshopModel.findAll({
      include: [
        {
          model: AddressModel,
          as: "address",
        },
      ],
    });

    return data.map((mechanicalWorkshop) => MechanicalWorkshopModel.formatToEntity(mechanicalWorkshop));
  }
}