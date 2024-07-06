import { IBaseController } from "../../../../shared/interfaces/ControllerBase";

type DeleteMechanicalWorkshopControllerBody = {};
type DeleteMechanicalWorkshopControllerParams = {
  id: string;
};
type DeleteMechanicalWorkshopControllerQuery = {};
type DeleteMechanicalWorkshopControllerHeaders = {};

export interface IDeleteMechanicalWorkshopController extends IBaseController<
DeleteMechanicalWorkshopControllerBody,
DeleteMechanicalWorkshopControllerQuery,
DeleteMechanicalWorkshopControllerParams,
DeleteMechanicalWorkshopControllerHeaders> {}