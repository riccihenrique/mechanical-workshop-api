import { IMechanicalWorkshopRepository } from "../../../interfaces/repositories/mechanical-workshop";
import { MechanicalWorkshopRepository } from "../../../repositories/mechanical-workshop";

export const makeMechanicalWorkshopRepository = (): IMechanicalWorkshopRepository => {
  return new MechanicalWorkshopRepository();
}