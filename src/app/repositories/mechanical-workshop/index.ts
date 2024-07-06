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
      addressId: address.id
    });

    return MechanicalWorkshopModel.formatToEntity(mechanicalWorkshop);
  }
  update(id: string, data: { name: string; street: string; city: string; state: string; zip: string; }): Promise<MechanicalWorkshop> {
    throw new Error("Method not implemented.");
  }
  deleteById(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<MechanicalWorkshop | null> {
    throw new Error("Method not implemented.");
  }
  list(): Promise<MechanicalWorkshop[]> {
    throw new Error("Method not implemented.");
  }
}