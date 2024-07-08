import { IDeleteMechanicalWorkshopService } from "../../../interfaces/services/mechanical-workshop";
import { DeleteMechanicalWorkshopService } from "../../../services/mechanical-workshop";
import { makeMechanicalWorkshopRepository } from "../../repositories/mechanical-workshop";

export const makeDeleteMechanicalWorkshopService = (): IDeleteMechanicalWorkshopService => {
  return new DeleteMechanicalWorkshopService(
    makeMechanicalWorkshopRepository(),
  )
}