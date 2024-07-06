import { Address } from "./Address";

export type MechanicalWorkshop = {
  id: number;
  name: string;
  address: Address;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}