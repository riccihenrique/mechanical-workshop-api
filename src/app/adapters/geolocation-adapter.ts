import { IGeolocationAdapter } from "../interfaces/adapters/geolocation-adapter";
import GetDistance from 'geolib/es/getDistance'

export class GeolocationAdapter implements IGeolocationAdapter {
  getDistanceBetweenTwoPoints(lat1: number, long1: number, lat2: number, long2: number): number {
    return GetDistance(
      { latitude: lat1, longitude: long1 },
      { latitude: lat2, longitude: long2 },
    );
  }
}