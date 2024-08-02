import { CreateMechanicalWorkshopController } from "../../../controllers/mechanical-workshop";
import { ICreateMechanicalWorkshopController } from "../../../interfaces/controllers/mechanical-workshop";
import { makeCreateMechanicalWorkshopService } from "../../services/mechanical-workshop";

export const makeCreateMechanicalWorkshopController = (): ICreateMechanicalWorkshopController => {
  return new CreateMechanicalWorkshopController(
    makeCreateMechanicalWorkshopService()
  )
}