import { CustomError } from "../../../../shared/custom-errors/custom-error";

type UpdateMechanicalWorkshopDataDTO = {
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  latitude: number;
  longitude: number;
}

export interface IUpdateMechanicalWorkshopService {
  update(id: string, data: UpdateMechanicalWorkshopDataDTO): Promise<CustomError | void>;
}