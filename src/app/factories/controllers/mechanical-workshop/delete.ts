import { DeleteMechanicalWorkshopController } from "../../../controllers/mechanical-workshop";
import { IDeleteMechanicalWorkshopController } from "../../../interfaces/controllers/mechanical-workshop";
import { makeDeleteMechanicalWorkshopService } from "../../services/mechanical-workshop";

export const makeDeleteMechanicalWorkshopController = (): IDeleteMechanicalWorkshopController => {
  return new DeleteMechanicalWorkshopController(
    makeDeleteMechanicalWorkshopService()
  )
}