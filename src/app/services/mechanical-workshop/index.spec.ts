import { MechanicalWorkshopService } from ".";
import { IGeolocationAdapter } from "../../interfaces/adapters/geolocation-adapter";
import { IMechanicalWorkshopRepository } from "../../interfaces/repositories/mechanical-workshop";
import { IMechanicalWorkshopService } from "../../interfaces/services/mechanical-workshop";
import { MockProxy, mock } from 'jest-mock-extended'; 

describe('MechanicalWorkshopService', () => {
  let sut: IMechanicalWorkshopService;
  let mechanicalWorkshopRepository: MockProxy<IMechanicalWorkshopRepository>;
  let geolocationAdapter: MockProxy<IGeolocationAdapter>;

  const defaultData = {
    name: 'any_name',
    street: 'any_street',
    city: 'any_city',
    state: 'any_state',
    zip: 'any_zip',
    latitude: 0,
    longitude: 0,
  };

  beforeEach(() => {
    mechanicalWorkshopRepository = mock();
    geolocationAdapter = mock();

    sut = new MechanicalWorkshopService(mechanicalWorkshopRepository, geolocationAdapter);
  });

  describe('create', () => {
    beforeEach(() => {
      mechanicalWorkshopRepository.create.mockResolvedValue({} as any);
    });

    test('should call mechanicalWorkshopRepository with correct values', async () => {
      await sut.create(defaultData);

      expect(mechanicalWorkshopRepository.create).toHaveBeenCalledWith(defaultData);
    });

    test('should return the created mechanical workshop', async () => {
      mechanicalWorkshopRepository.create.mockResolvedValue({} as any);

      const result = await sut.create(defaultData);

      expect(result).toEqual({});
    });
  });

  describe('delete', () => {
    beforeEach(() => {
      mechanicalWorkshopRepository.deleteById.mockResolvedValue();
      mechanicalWorkshopRepository.findById.mockResolvedValue({} as any);
    });

    test('should call mechanicalWorkshopRepository with correct values', async () => {
      await sut.deleteById('any_id');

      expect(mechanicalWorkshopRepository.findById).toHaveBeenCalledWith('any_id');
    });

    test('should return an error if mechanical workshop not found', async () => {
      mechanicalWorkshopRepository.findById.mockResolvedValue(null);

      const result = await sut.deleteById('any_id');

      expect(result).toEqual(new Error('Mechanical Workshop not found'));
    });

    test('should call mechanicalWorkshopRepository with correct values', async () => {
      await sut.deleteById('any_id');

      expect(mechanicalWorkshopRepository.deleteById).toHaveBeenCalledWith('any_id');
    });
  });
});