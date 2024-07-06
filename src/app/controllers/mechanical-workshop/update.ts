import { IUpdateMechanicalWorkshopController } from "../../interfaces/controllers/mechanical-workshop";
import { IMechanicalWorkshopService } from "../../interfaces/services/mechanical-workshop";

export class UpdateMechanicalWorkshopController implements IUpdateMechanicalWorkshopController {
  constructor(private mechanicalWorkshopService: IMechanicalWorkshopService) {}
  async execute(params: { body: { name: string; street: string; city: string; state: string; zip: string; latitude: number; longitude: number }; query: {}; params: { id: string; }; headers: {}; }): Promise<{ data: any; statusCode: number; }> {
    const { id } = params.params;
    const { body } = params;

    const result = await this.mechanicalWorkshopService.update(id, {
      name: body.name,
      street: body.street,
      city: body.city,
      state: body.state,
      zip: body.zip,
      latitude: body.latitude,
      longitude: body.longitude
    });

    return {
      statusCode: 200,
      data: result,
    }
  }
}