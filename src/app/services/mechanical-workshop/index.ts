import { MechanicalWorkshop } from "../../entities/MechanicalWorkshop";
import { IGeolocationAdapter } from "../../interfaces/adapters/geolocation-adapter";
import { IMechanicalWorkshopRepository } from "../../interfaces/repositories/mechanical-workshop";
import { IMechanicalWorkshopService } from "../../interfaces/services/mechanical-workshop";

export class MechanicalWorkshopService implements IMechanicalWorkshopService {
  constructor(
    private mechanicalWorkshopRepository: IMechanicalWorkshopRepository,
    private geolocationAdapter: IGeolocationAdapter
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

  async deleteById(id: string): Promise<Error | void> {
    const mechanicalExists = await this.mechanicalWorkshopRepository.findById(id);

    if (!mechanicalExists) {
      return new Error('Mechanical Workshop not found');
    }

    await this.mechanicalWorkshopRepository.deleteById(id);
  }

  list(): Promise<MechanicalWorkshop[]> {
    return this.mechanicalWorkshopRepository.list();
  }

  async findById(id: string): Promise<MechanicalWorkshop | Error> {
    const result = await this.mechanicalWorkshopRepository.findById(id);

    if (result === null) {
      return new Error('Mechanical Workshop not found');
    }

    return result;
  }

  async geographicSearch(lat: number, long: number, distance: number): Promise<MechanicalWorkshop[]> {
    const result = await this.mechanicalWorkshopRepository.findByLocation(lat, long, distance);

    return result;
  }
}