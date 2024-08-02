import { CustomError } from "../../../shared/custom-errors/custom-error";
import { NotFoundError } from "../../../shared/custom-errors/not-found";
import { IMechanicalWorkshopRepository } from "../../interfaces/repositories/mechanical-workshop";
import { IDeleteMechanicalWorkshopService } from "../../interfaces/services/mechanical-workshop";

export class DeleteMechanicalWorkshopService implements IDeleteMechanicalWorkshopService {
  constructor(
    private mechanicalWorkshopRepository: IMechanicalWorkshopRepository,
  ) {}

  async deleteById(id: string): Promise<CustomError | void> {
    const mechanicalExists = await this.mechanicalWorkshopRepository.findById(id);

    if (!mechanicalExists) {
      return new NotFoundError('Mechanical Workshop not found');
    }

    await this.mechanicalWorkshopRepository.deleteById(id);
  }
}