import { MechanicalWorkshop } from "../../../entities/MechanicalWorkshop";

type CreateMechanicalWorkshopDataDTO = {
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  latitude: number;
  longitude: number;
}

export interface ICreateMechanicalWorkshopService {
  create(data: CreateMechanicalWorkshopDataDTO): Promise<MechanicalWorkshop>;
}