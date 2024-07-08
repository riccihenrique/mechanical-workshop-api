import { IBaseController } from "../../../../shared/interfaces/controller-base";

type FindByIdMechanicalWorkshopControllerBody = {};
type FindByIdMechanicalWorkshopControllerParams = {
  id: string;
};
type FindByIdMechanicalWorkshopControllerQuery = {};
type FindByIdMechanicalWorkshopControllerHeaders = {};

export interface IFindByIdMechanicalWorkshopController extends IBaseController<
FindByIdMechanicalWorkshopControllerBody,
FindByIdMechanicalWorkshopControllerQuery,
FindByIdMechanicalWorkshopControllerParams,
FindByIdMechanicalWorkshopControllerHeaders> {}