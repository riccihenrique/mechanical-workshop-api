import { MechanicalWorkshop } from "../../entities/MechanicalWorkshop";
import { IGeolocationAdapter } from "../../interfaces/adapters/geolocation-adapter";
import { IMechanicalWorkshopRepository } from "../../interfaces/repositories/mechanical-workshop";
import { IGeographicalSearchMechanicalWorkshopService } from "../../interfaces/services/mechanical-workshop";

export class GeographicalSearchMechanicalWorkshopService implements IGeographicalSearchMechanicalWorkshopService {
  constructor(
    private mechanicalWorkshopRepository: IMechanicalWorkshopRepository,
    private geolocationAdapter: IGeolocationAdapter
  ) {}

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