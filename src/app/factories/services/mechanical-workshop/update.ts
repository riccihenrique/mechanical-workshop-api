import { IUpdateMechanicalWorkshopService } from "../../../interfaces/services/mechanical-workshop";
import { UpdateMechanicalWorkshopService } from "../../../services/mechanical-workshop";
import { makeMechanicalWorkshopRepository } from "../../repositories/mechanical-workshop";

export const makeUpdateMechanicalWorkshopService = (): IUpdateMechanicalWorkshopService => {
  return new UpdateMechanicalWorkshopService(
    makeMechanicalWorkshopRepository(),
  )
}