import { CustomError } from "../../../shared/custom-errors/custom-error";
import { NotFoundError } from "../../../shared/custom-errors/not-found";
import { IMechanicalWorkshopRepository } from "../../interfaces/repositories/mechanical-workshop";
import { IUpdateMechanicalWorkshopService } from "../../interfaces/services/mechanical-workshop";

export class UpdateMechanicalWorkshopService implements IUpdateMechanicalWorkshopService {
  constructor(
    private mechanicalWorkshopRepository: IMechanicalWorkshopRepository,
  ) {}
  async update(id: string, data: { name: string; street: string; city: string; state: string; zip: string; latitude: number; longitude: number; }): Promise<CustomError | void> {
    const mechanicalExists = await this.mechanicalWorkshopRepository.findById(id);

    if (!mechanicalExists) {
      return new NotFoundError('Mechanical Workshop not found');
    }

    await this.mechanicalWorkshopRepository.update(id, mechanicalExists.address.id, {
      name: data.name,
      street: data.street,
      city: data.city,
      state: data.state,
      zip: data.zip,
      latitude: data.latitude,
      longitude: data.longitude,
    });
  }
}