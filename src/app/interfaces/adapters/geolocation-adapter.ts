export interface IGeolocationAdapter {
  getDistanceBetweenTwoPoints(lat1: number, long1: number, lat2: number, long2: number): number;
}