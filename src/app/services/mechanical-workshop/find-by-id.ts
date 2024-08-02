import { CustomError } from "../../../shared/custom-errors/custom-error";
import { NotFoundError } from "../../../shared/custom-errors/not-found";
import { MechanicalWorkshop } from "../../entities/MechanicalWorkshop";
import { IMechanicalWorkshopRepository } from "../../interfaces/repositories/mechanical-workshop";
import { IFindByIdMechanicalWorkshopService } from "../../interfaces/services/mechanical-workshop";

export class FindByIdMechanicalWorkshopService implements IFindByIdMechanicalWorkshopService {
  constructor(
    private mechanicalWorkshopRepository: IMechanicalWorkshopRepository,
  ) {}
  async findById(id: string): Promise<MechanicalWorkshop | CustomError> {
    const result = await this.mechanicalWorkshopRepository.findById(id);

    if (result === null) {
      return new NotFoundError('Mechanical Workshop not found');
    }

    return result;
  }
}