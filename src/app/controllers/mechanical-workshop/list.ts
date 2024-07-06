import { IListMechanicalWorkshopController } from "../../interfaces/controllers/mechanical-workshop";
import { IMechanicalWorkshopService } from "../../interfaces/services/mechanical-workshop";

export class ListMechanicalWorkshopController implements IListMechanicalWorkshopController {
  constructor(private mechanicalWorkshopService: IMechanicalWorkshopService) {}
  async execute(params: { body: {}; query: {}; params: {}; headers: {}; }): Promise<{ data: any; statusCode: number; }> {
    const result = await this.mechanicalWorkshopService.list();

    return {
      statusCode: 200,
      data: result,
    }
  }
}