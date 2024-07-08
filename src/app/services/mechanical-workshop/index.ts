import { CustomError } from "../../../shared/custom-errors/custom-error";
import { NotFoundError } from "../../../shared/custom-errors/not-found";
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

  async update(id: string, data: { name: string; street: string; city: string; state: string; zip: string; latitude: number; longitude: number; }): Promise<CustomError | void> {
    const mechanicalExists = await this.mechanicalWorkshopRepository.findById(id);

    if (!mechanicalExists) {
      return new NotFoundError('Mechanical Workshop not found');
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

  async deleteById(id: string): Promise<CustomError | void> {
    const mechanicalExists = await this.mechanicalWorkshopRepository.findById(id);

    if (!mechanicalExists) {
      return new NotFoundError('Mechanical Workshop not found');
    }

    await this.mechanicalWorkshopRepository.deleteById(id);
  }

  list(): Promise<MechanicalWorkshop[]> {
    return this.mechanicalWorkshopRepository.list();
  }

  async findById(id: string): Promise<MechanicalWorkshop | CustomError> {
    const result = await this.mechanicalWorkshopRepository.findById(id);

    if (result === null) {
      return new NotFoundError('Mechanical Workshop not found');
    }

    return result;
  }

  async geographicSearch(lat: number, long: number, distance: number): Promise<MechanicalWorkshop[]> {
    const result = await this.mechanicalWorkshopRepository.list();

    const mechanicalWorkshopsInDistance = result.filter(workshop => {
      const distanceInMeters = this.geolocationAdapter.getDistanceBetweenTwoPoints(
        lat,
        long,
        workshop.address.latitude,
        workshop.address.longitude
      );

      const distanceInKm = distanceInMeters / 1000;

      return distanceInKm <= distance;
    });

    return mechanicalWorkshopsInDistance;
  }
}