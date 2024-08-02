import { GeographicalSearchMechanicalWorkshopController } from "../../../controllers/mechanical-workshop";
import { IGeographicalSearchMechanicalWorkshopController } from "../../../interfaces/controllers/mechanical-workshop";
import { makeGeographicalSearchMechanicalWorkshopService } from "../../services/mechanical-workshop";

export const makeGeographicalSearchMechanicalWorkshopController = (): IGeographicalSearchMechanicalWorkshopController => {
  return new GeographicalSearchMechanicalWorkshopController(
    makeGeographicalSearchMechanicalWorkshopService()
  )
}