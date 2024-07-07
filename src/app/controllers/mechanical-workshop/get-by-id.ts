import {IGetByIdMechanicalWorkshopController } from "../../interfaces/controllers/mechanical-workshop";
import { IMechanicalWorkshopService } from "../../interfaces/services/mechanical-workshop";

export class GetByIdMechanicalWorkshopController implements IGetByIdMechanicalWorkshopController {
  constructor(private mechanicalWorkshopService: IMechanicalWorkshopService) {}
  async execute(params: { body: {}; query: {}; params: { id: string; }; headers: {}; }): Promise<{ data: any; statusCode: number; }> {
    const { id } = params.params;

    const result = await this.mechanicalWorkshopService.findById(id);

    if (result instanceof Error) {
      return {
        statusCode: 404,
        data: {
          message: result.message,
        },
      }
    }

    return {
      statusCode: 200,
      data: result,
    }
  }
}