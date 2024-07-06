import {IDeleteMechanicalWorkshopController } from "../../interfaces/controllers/mechanical-workshop";
import { IMechanicalWorkshopService } from "../../interfaces/services/mechanical-workshop";

export class DeleteMechanicalWorkshopController implements IDeleteMechanicalWorkshopController {
  constructor(private mechanicalWorkshopService: IMechanicalWorkshopService) {}
  async execute(params: { body: {}; query: {}; params: { id: string; }; headers: {}; }): Promise<{ data: any; statusCode: number; }> {
    const { id } = params.params;

    await this.mechanicalWorkshopService.deleteById(id);

    return {
      statusCode: 204,
      data: null,
    }
  }
}