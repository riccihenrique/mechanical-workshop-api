import { FindByIdMechanicalWorkshopController  } from "../../../controllers/mechanical-workshop";
import { IFindByIdMechanicalWorkshopController } from "../../../interfaces/controllers/mechanical-workshop";
import { makeFindByIdMechanicalWorkshopService } from "../../services/mechanical-workshop";

export const makeFindByIdMechanicalWorkshopController = (): IFindByIdMechanicalWorkshopController => {
  return new FindByIdMechanicalWorkshopController(
    makeFindByIdMechanicalWorkshopService()
  )
}