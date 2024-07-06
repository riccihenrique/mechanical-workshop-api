import { IMechanicalWorkshopService } from "../../../interfaces/services/mechanical-workshop";
import { MechanicalWorkshopRepository } from "../../../repositories/mechanical-workshop";
import { MechanicalWorkshopService } from "../../../services/mechanical-workshop";

export const makeMechanicalWorkshopService = (): IMechanicalWorkshopService => {
  return new MechanicalWorkshopService(
    new MechanicalWorkshopRepository()
  )
}