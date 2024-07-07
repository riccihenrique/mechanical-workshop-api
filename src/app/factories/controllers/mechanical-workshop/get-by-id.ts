import { GetByIdMechanicalWorkshopController  } from "../../../controllers/mechanical-workshop";
import { IGetByIdMechanicalWorkshopController } from "../../../interfaces/controllers/mechanical-workshop";
import { makeMechanicalWorkshopService } from "../../services/mechanical-workshop";

export const makeGetByIdMechanicalWorkshopController = (): IGetByIdMechanicalWorkshopController => {
  return new GetByIdMechanicalWorkshopController(
    makeMechanicalWorkshopService()
  )
}