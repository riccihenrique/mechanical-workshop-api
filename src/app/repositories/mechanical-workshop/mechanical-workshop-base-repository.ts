import { MechanicalWorkshopModel } from "../../../database/models/MechanicalWorkshop.model";
import { RepositoryBase } from "../../../shared/interfaces/repository-base";
import { MechanicalWorkshop } from "../../entities/MechanicalWorkshop";

export class MechanicalWorkshopBaseRepository extends RepositoryBase<MechanicalWorkshopModel, MechanicalWorkshop> {
  formatToEntity(data: MechanicalWorkshopModel): MechanicalWorkshop {
    return {
      id: data.id,
      name: data.name,
      address: {
        id: data.address.id,
        street: data.address.street,
        city: data.address.city,
        state: data.address.state,
        zip: data.address.zip,
        latitude: data.address.latitude,
        longitude: data.address.longitude,
        createdAt: data.address.createdAt,
        updatedAt: data.address.updatedAt,
        deletedAt: data.address.deletedAt
      },
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      deletedAt: data.deletedAt
    };
  }
}