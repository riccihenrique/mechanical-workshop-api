import { CustomError } from "../../../shared/custom-errors/custom-error";
import {IDeleteMechanicalWorkshopController } from "../../interfaces/controllers/mechanical-workshop";
import { IDeleteMechanicalWorkshopService } from "../../interfaces/services/mechanical-workshop";

export class DeleteMechanicalWorkshopController implements IDeleteMechanicalWorkshopController {
  constructor(private mechanicalWorkshopService: IDeleteMechanicalWorkshopService) {}
  async execute(params: { body: {}; query: {}; params: { id: string; }; headers: {}; }): Promise<{ data: any; statusCode: number; }> {
    const { id } = params.params;

    const result = await this.mechanicalWorkshopService.deleteById(id);

    if (result instanceof CustomError) {
      return {
        statusCode: 404,
        data: {
          message: result.message,
        },
      }
    }

    return {
      statusCode: 204,
      data: result,
    }
  }
}