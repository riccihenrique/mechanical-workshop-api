import { MechanicalWorkshop } from "../../../entities/MechanicalWorkshop";

type MechanicalWorkshopDataDTO = {
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  latitude: number;
  longitude: number;
}

export interface IMechanicalWorkshopService {
  create(data: MechanicalWorkshopDataDTO): Promise<MechanicalWorkshop>;
  update(id: string, data: MechanicalWorkshopDataDTO): Promise<Error | void>;
  deleteById(id: string): Promise<Error | void>;
  list(): Promise<MechanicalWorkshop[]>;
  findById(id: string): Promise<MechanicalWorkshop | Error>;
  geographicSearch(lat: number, long: number, distance: number): Promise<MechanicalWorkshop[]>;
}