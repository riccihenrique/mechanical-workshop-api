import { MechanicalWorkshopRepository } from ".";
import { AddressModel } from "../../../database/models/Address.model";
import { MechanicalWorkshopModel } from "../../../database/models/MechanicalWorkshop.model";
import { IMechanicalWorkshopRepository } from "../../interfaces/repositories/mechanical-workshop";

jest.mock('../../../database/models/MechanicalWorkshop.model', () => ({
  MechanicalWorkshopModel: {
    create: jest.fn(),
    findByPk: jest.fn(),
  }
}));

jest.mock('../../../database/models/Address.model', () => ({
  AddressModel: {
    create: jest.fn(),
  }
}));

describe('MechanicalWorkshopRepository', () => {
  let addressCreateSpy: jest.SpyInstance;
  let mechanicalWorkshopCreateSpy: jest.SpyInstance;
  let mechanicalWorkshopFindByIdSpy: jest.SpyInstance;
  let sut: IMechanicalWorkshopRepository;

  const defaultData = {
    name: 'any_name',
    street: 'any_street',
    city: 'any_city',
    state: 'any_state',
    zip: 'any_zip',
    latitude: 0,
    longitude: 0,
  };

  const mockAddressModel = {
    id: 'any_address_id',
    street: 'any_street',
    city: 'any_city',
    state: 'any_state',
    zip: 'any_zip',
    latitude: 0,
    longitude: 0,
    createdAt: new Date('2024-07-07'),
    updatedAt: new Date('2024-07-07'),
    deletedAt: null,
  };
  
  const mockMechanicalWorkshopModel = {
    id: 'any_id',
    name: 'any_name',
    createdAt: new Date('2024-07-07'),
    updatedAt: new Date('2024-07-07'),
    deletedAt: null,
  };

  beforeEach(() => {
    addressCreateSpy = jest.spyOn(AddressModel, 'create').mockResolvedValue(mockAddressModel);
    mechanicalWorkshopCreateSpy = jest.spyOn(MechanicalWorkshopModel, 'create').mockResolvedValue(mockMechanicalWorkshopModel);
    mechanicalWorkshopFindByIdSpy = jest.spyOn(MechanicalWorkshopModel, 'findByPk').mockResolvedValue({
      ...mockMechanicalWorkshopModel,
      addressId: mockAddressModel.id,
      address: mockAddressModel,
    } as any);

    sut = new MechanicalWorkshopRepository();
  });

  describe('create', () => {
    test('should call AddressModel.create with correct values', async () => {
      
      await sut.create(defaultData);

      expect(addressCreateSpy).toHaveBeenCalledWith({
        street: defaultData.street,
        city: defaultData.city,
        state: defaultData.state,
        zip: defaultData.zip,
        latitude: defaultData.latitude,
        longitude: defaultData.longitude
      });
    });

    test('should call MechanicalWorkshopModel.create with correct values', async () => {
      await sut.create(defaultData);

      expect(mechanicalWorkshopCreateSpy).toHaveBeenCalledWith({
        name: defaultData.name,
        addressId: mockAddressModel.id,
      });
    });

    test('should return a MechanicalWorkshop on success', async () => {
      const result = await sut.create(defaultData);

      expect(result).toEqual({
        ...mockMechanicalWorkshopModel,
        address: mockAddressModel,
      });
    });
  });

  describe('findById', () => {
    test('should call  MechanicalWorkshopModel.create with correct values', async () => {
      await sut.findById('any_id');

      expect(mechanicalWorkshopFindByIdSpy).toHaveBeenCalledWith(
        'any_id',
        {
          include: [
            {
              model: AddressModel,
              as: "address",
              required: true,
            },
          ],
        },
      );
    });

    test('should return null if MechanicalWorkshopModel.findByPk returns null', async () => {
      mechanicalWorkshopFindByIdSpy.mockResolvedValueOnce(null);

      const result = await sut.findById('any_id');

      expect(result).toBeNull();
    });

    test('should return a MechanicalWorkshop on success', async () => {
      const result = await sut.findById('any_id');

      expect(result).toEqual({
        ...mockMechanicalWorkshopModel,
        address: mockAddressModel,
      });
    });
  });
});