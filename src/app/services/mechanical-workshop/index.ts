import { MechanicalWorkshop } from "../../entities/MechanicalWorkshop";
import { IMechanicalWorkshopRepository } from "../../interfaces/repositories/mechanical-workshop";
import { IMechanicalWorkshopService } from "../../interfaces/services/mechanical-workshop";

export class MechanicalWorkshopService implements IMechanicalWorkshopService {
  constructor(private mechanicalWorkshopRepository: IMechanicalWorkshopRepository) {}
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

  async update(id: string, data: { name: string; street: string; city: string; state: string; zip: string; latitude: number; longitude: number; }): Promise<Error | void> {
    const mechanicalExists = await this.mechanicalWorkshopRepository.findById(id);

    if (!mechanicalExists) {
      return new Error('Mechanical Workshop not found');
    }

    await this.mechanicalWorkshopRepository.update(id, mechanicalExists.address.id, {
      name: data.name,
      street: data.street,
      city: data.city,
      state: data.state,
      zip: data.zip,
      latitude: data.latitude,
      longitude: data.longitude,
    });
  }

  deleteById(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

  list(): Promise<MechanicalWorkshop[]> {
    throw new Error("Method not implemented.");
  }

  findById(id: string): Promise<MechanicalWorkshop> {
    throw new Error("Method not implemented.");
  }

  geographicSearch(lat: number, long: number, distance: number): Promise<MechanicalWorkshop[]> {
    throw new Error("Method not implemented.");
  }

}