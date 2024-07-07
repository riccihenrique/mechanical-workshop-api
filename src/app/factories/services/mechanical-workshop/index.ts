import { IMechanicalWorkshopService } from "../../../interfaces/services/mechanical-workshop";
import { MechanicalWorkshopService } from "../../../services/mechanical-workshop";
import { makeGeolocationAdapter } from "../../adapters/geolocation-adapter";
import { makeMechanicalWorkshopRepository } from "../../repositories/mechanical-workshop";

export const makeMechanicalWorkshopService = (): IMechanicalWorkshopService => {
  return new MechanicalWorkshopService(
    makeMechanicalWorkshopRepository(),
    makeGeolocationAdapter(),
  )
}