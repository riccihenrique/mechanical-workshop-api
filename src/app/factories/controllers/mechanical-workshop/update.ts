import { UpdateMechanicalWorkshopController } from "../../../controllers/mechanical-workshop";
import { IUpdateMechanicalWorkshopController } from "../../../interfaces/controllers/mechanical-workshop";
import { makeUpdateMechanicalWorkshopService } from "../../services/mechanical-workshop";

export const makeUpdateMechanicalWorkshopController = (): IUpdateMechanicalWorkshopController => {
  return new UpdateMechanicalWorkshopController(
    makeUpdateMechanicalWorkshopService()
  )
}