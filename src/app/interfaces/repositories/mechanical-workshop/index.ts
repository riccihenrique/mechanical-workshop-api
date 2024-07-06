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
  update(id: string, data: MechanicalWorkshopDataDTO): Promise<MechanicalWorkshop>;
  deleteById(id: string): Promise<void>;
  findById(id: string): Promise<MechanicalWorkshop | null>;
  list(): Promise<MechanicalWorkshop[]>;
}