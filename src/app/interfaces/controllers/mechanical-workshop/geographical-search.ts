import { IBaseController } from "../../../../shared/interfaces/controller-base";

type GeographicalSearchMechanicalWorkshopControllerBody = {
  latitude: number;
  longitude: number;
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