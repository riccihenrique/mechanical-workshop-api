import { CustomError } from "../../../../shared/custom-errors/custom-error";
import { MechanicalWorkshop } from "../../../entities/MechanicalWorkshop";

export interface IFindByIdMechanicalWorkshopService {
  findById(id: string): Promise<MechanicalWorkshop | CustomError>;
}