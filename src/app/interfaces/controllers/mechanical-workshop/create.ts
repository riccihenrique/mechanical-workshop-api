import { IBaseController } from "../../../../shared/interfaces/controller-base";

type CreateMechanicalWorkshopControllerBody = {
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  latitude: number;
  longitude: number;
};
type CreateMechanicalWorkshopControllerParams = {};
type CreateMechanicalWorkshopControllerQuery = {};
type CreateMechanicalWorkshopControllerHeaders = {};

export interface ICreateMechanicalWorkshopController extends IBaseController<
CreateMechanicalWorkshopControllerBody,
CreateMechanicalWorkshopControllerQuery,
CreateMechanicalWorkshopControllerParams,
CreateMechanicalWorkshopControllerHeaders> {}