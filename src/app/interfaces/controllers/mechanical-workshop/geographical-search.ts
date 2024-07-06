import { IBaseController } from "../../../../shared/interfaces/ControllerBase";

type GeographicalSearchMechanicalWorkshopControllerBody = {
  lat: number;
  long: number;
  distance: number;
};
type GeographicalSearchMechanicalWorkshopControllerParams = {};
type GeographicalSearchMechanicalWorkshopControllerQuery = {};
type GeographicalSearchMechanicalWorkshopControllerHeaders = {};

export interface IGeographicalSearchMechanicalWorkshopController extends IBaseController<
GeographicalSearchMechanicalWorkshopControllerBody,
GeographicalSearchMechanicalWorkshopControllerQuery,
GeographicalSearchMechanicalWorkshopControllerParams,
GeographicalSearchMechanicalWorkshopControllerHeaders> {}