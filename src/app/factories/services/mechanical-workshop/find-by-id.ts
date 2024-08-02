import { IFindByIdMechanicalWorkshopService } from "../../../interfaces/services/mechanical-workshop";
import { FindByIdMechanicalWorkshopService } from "../../../services/mechanical-workshop";
import { makeMechanicalWorkshopRepository } from "../../repositories/mechanical-workshop";

export const makeFindByIdMechanicalWorkshopService = (): IFindByIdMechanicalWorkshopService => {
  return new FindByIdMechanicalWorkshopService(
    makeMechanicalWorkshopRepository(),
  )
}