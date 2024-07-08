import { IListMechanicalWorkshopService } from "../../../interfaces/services/mechanical-workshop";
import { ListMechanicalWorkshopService } from "../../../services/mechanical-workshop";
import { makeMechanicalWorkshopRepository } from "../../repositories/mechanical-workshop";

export const makeListMechanicalWorkshopService = (): IListMechanicalWorkshopService => {
  return new ListMechanicalWorkshopService(
    makeMechanicalWorkshopRepository(),
  )
}