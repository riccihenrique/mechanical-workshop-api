import { MechanicalWorkshop } from "../../../entities/MechanicalWorkshop";

export interface IListMechanicalWorkshopService {
  list(): Promise<MechanicalWorkshop[]>;
}