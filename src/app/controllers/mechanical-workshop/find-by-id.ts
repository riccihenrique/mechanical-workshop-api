import { CustomError } from "../../../shared/custom-errors/custom-error";
import {IFindByIdMechanicalWorkshopController } from "../../interfaces/controllers/mechanical-workshop";
import { IFindByIdMechanicalWorkshopService } from "../../interfaces/services/mechanical-workshop";

export class FindByIdMechanicalWorkshopController implements IFindByIdMechanicalWorkshopController {
  constructor(private mechanicalWorkshopService: IFindByIdMechanicalWorkshopService) {}
  async execute(params: { body: {}; query: {}; params: { id: string; }; headers: {}; }): Promise<{ data: any; statusCode: number; }> {
    const { id } = params.params;

    const result = await this.mechanicalWorkshopService.findById(id);

    if (result instanceof CustomError) {
      return {
        statusCode: result.statusCode,
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