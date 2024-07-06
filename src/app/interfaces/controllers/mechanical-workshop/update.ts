import { IBaseController } from "../../../../shared/interfaces/controller-base";

type UpdateMechanicalWorkshopControllerBody = {
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
};
type UpdateMechanicalWorkshopControllerParams = {
  id: string;
};
type UpdateMechanicalWorkshopControllerQuery = {};
type UpdateMechanicalWorkshopControllerHeaders = {};

export interface IUpdateMechanicalWorkshopController extends IBaseController<
UpdateMechanicalWorkshopControllerBody,
UpdateMechanicalWorkshopControllerQuery,
UpdateMechanicalWorkshopControllerParams,
UpdateMechanicalWorkshopControllerHeaders> {}