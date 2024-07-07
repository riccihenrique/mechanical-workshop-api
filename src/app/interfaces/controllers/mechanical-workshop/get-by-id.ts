import { IBaseController } from "../../../../shared/interfaces/controller-base";

type GetByIdMechanicalWorkshopControllerBody = {};
type GetByIdMechanicalWorkshopControllerParams = {
  id: string;
};
type GetByIdMechanicalWorkshopControllerQuery = {};
type GetByIdMechanicalWorkshopControllerHeaders = {};

export interface IGetByIdMechanicalWorkshopController extends IBaseController<
GetByIdMechanicalWorkshopControllerBody,
GetByIdMechanicalWorkshopControllerQuery,
GetByIdMechanicalWorkshopControllerParams,
GetByIdMechanicalWorkshopControllerHeaders> {}