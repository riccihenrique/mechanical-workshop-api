import { ICreateMechanicalWorkshopController } from "../../interfaces/controllers/mechanical-workshop";
import { IMechanicalWorkshopService } from "../../interfaces/services/mechanical-workshop";

export class CreateMechanicalWorkshopController implements ICreateMechanicalWorkshopController {
  constructor(private mechanicalWorkshopService: IMechanicalWorkshopService) {}
  
  async execute(params: { body: { name: string; street: string; city: string; state: string; zip: string; latitude: number; longitude: number }; query: {}; params: {}; headers: {}; }): Promise<{ data: any; statusCode: number; }> {
    const { body } = params;

    const result = await this.mechanicalWorkshopService.create({
      name: body.name,
      street: body.street,
      city: body.city,
      state: body.state,
      zip: body.zip,
      latitude: body.latitude,
      longitude: body.longitude
    });

    return {
      statusCode: 201,
      data: result,
    }
  }
}