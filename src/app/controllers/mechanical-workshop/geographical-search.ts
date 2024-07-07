import { IGeographicalSearchMechanicalWorkshopController
 } from "../../interfaces/controllers/mechanical-workshop";
import { IMechanicalWorkshopService } from "../../interfaces/services/mechanical-workshop";

export class GeographicalSearchMechanicalWorkshopController implements IGeographicalSearchMechanicalWorkshopController {
  constructor(private mechanicalWorkshopService: IMechanicalWorkshopService) {}
  
  async execute(params: { body: { latitude: number; longitude: number; distance: number; }; query: {}; params: {}; headers: {}; }): Promise<{ data: any; statusCode: number; }> {
    const { body } = params;

    const result = await this.mechanicalWorkshopService.geographicSearch(body.latitude, body.longitude, body.distance);

    return {
      statusCode: 200,
      data: result
    };
  }
}