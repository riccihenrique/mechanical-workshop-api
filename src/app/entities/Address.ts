export type Address = {
  id: number;
  street: string;
  city: string;
  state: string;
  zip: string;
  latitude: number;
  longitude: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}