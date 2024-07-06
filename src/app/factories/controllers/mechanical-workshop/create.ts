import { CreateMechanicalWorkshopController } from "../../../controllers/mechanical-workshop";
import { ICreateMechanicalWorkshopController } from "../../../interfaces/controllers/mechanical-workshop";
import { makeMechanicalWorkshopService } from "../../services/mechanical-workshop";

export const makeCreateMechanicalWorkshopController = (): ICreateMechanicalWorkshopController => {
  return new CreateMechanicalWorkshopController(
    makeMechanicalWorkshopService()
  )
}