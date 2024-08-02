import { CustomError } from "../../../../shared/custom-errors/custom-error";

export interface IDeleteMechanicalWorkshopService {
  deleteById(id: string): Promise<CustomError | void>;
}