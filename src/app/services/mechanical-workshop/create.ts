import { MechanicalWorkshop } from "../../entities/MechanicalWorkshop";
import { IMechanicalWorkshopRepository } from "../../interfaces/repositories/mechanical-workshop";
import { ICreateMechanicalWorkshopService } from "../../interfaces/services/mechanical-workshop";

export class CreateMechanicalWorkshopService implements ICreateMechanicalWorkshopService {
  constructor(
    private mechanicalWorkshopRepository: IMechanicalWorkshopRepository,
  ) {}
  async create(data: { name: string; street: string; city: string; state: string; zip: string; latitude: number; longitude: number; }): Promise<MechanicalWorkshop> {
    const result = await this.mechanicalWorkshopRepository.create({
      name: data.name,
      street: data.street,
      city: data.city,
      state: data.state,
      zip: data.zip,
      latitude: data.latitude,
      longitude: data.longitude
    });

    return result;
  }
}