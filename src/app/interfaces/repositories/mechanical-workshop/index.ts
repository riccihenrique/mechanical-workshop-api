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


export interface IMechanicalWorkshopRepository {
  create(data: MechanicalWorkshopDataDTO): Promise<MechanicalWorkshop>;
  update(idMechanical: string, idAddress: string, data: MechanicalWorkshopDataDTO): Promise<void>;
  deleteById(id: string): Promise<void>;
  findById(id: string): Promise<MechanicalWorkshop | null>;
  list(): Promise<MechanicalWorkshop[]>;
  findByLocation(lat: number, long: number, distance: number): Promise<MechanicalWorkshop[]>;
}