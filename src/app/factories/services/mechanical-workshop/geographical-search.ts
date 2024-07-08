import { IGeographicalSearchMechanicalWorkshopService } from "../../../interfaces/services/mechanical-workshop";
import { GeographicalSearchMechanicalWorkshopService } from "../../../services/mechanical-workshop";
import { makeGeolocationAdapter } from "../../adapters/geolocation-adapter";
import { makeMechanicalWorkshopRepository } from "../../repositories/mechanical-workshop";

export const makeGeographicalSearchMechanicalWorkshopService = (): IGeographicalSearchMechanicalWorkshopService => {
  return new GeographicalSearchMechanicalWorkshopService(
    makeMechanicalWorkshopRepository(),
    makeGeolocationAdapter(),
  )
}