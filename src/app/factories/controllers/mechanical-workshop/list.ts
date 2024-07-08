import { ListMechanicalWorkshopController } from "../../../controllers/mechanical-workshop";
import { IListMechanicalWorkshopController } from "../../../interfaces/controllers/mechanical-workshop";
import { makeListMechanicalWorkshopService } from "../../services/mechanical-workshop";

export const makeListMechanicalWorkshopController = (): IListMechanicalWorkshopController => {
  return new ListMechanicalWorkshopController(
    makeListMechanicalWorkshopService()
  )
}