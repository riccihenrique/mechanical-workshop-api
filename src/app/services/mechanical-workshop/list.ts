import { MechanicalWorkshop } from "../../entities/MechanicalWorkshop";
import { IMechanicalWorkshopRepository } from "../../interfaces/repositories/mechanical-workshop";
import { IListMechanicalWorkshopService } from "../../interfaces/services/mechanical-workshop";

export class ListMechanicalWorkshopService implements IListMechanicalWorkshopService {
  constructor(
    private mechanicalWorkshopRepository: IMechanicalWorkshopRepository,
  ) {}

  list(): Promise<MechanicalWorkshop[]> {
    return this.mechanicalWorkshopRepository.list();
  }
}