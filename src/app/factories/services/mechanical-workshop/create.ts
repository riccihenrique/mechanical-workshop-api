import { ICreateMechanicalWorkshopService } from "../../../interfaces/services/mechanical-workshop";
import { CreateMechanicalWorkshopService } from "../../../services/mechanical-workshop";
import { makeMechanicalWorkshopRepository } from "../../repositories/mechanical-workshop";

export const makeCreateMechanicalWorkshopService = (): ICreateMechanicalWorkshopService => {
  return new CreateMechanicalWorkshopService(
    makeMechanicalWorkshopRepository(),
  )
}