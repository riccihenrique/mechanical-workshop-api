import { MechanicalWorkshop } from "../../../entities/MechanicalWorkshop";

export interface IGeographicalSearchMechanicalWorkshopService {
  geographicSearch(lat: number, long: number, distance: number): Promise<MechanicalWorkshop[]>;
}