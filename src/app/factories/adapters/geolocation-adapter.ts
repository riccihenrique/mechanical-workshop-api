import { GeolocationAdapter } from "../../adapters/geolocation-adapter";
import { IGeolocationAdapter } from "../../interfaces/adapters/geolocation-adapter";

export const makeGeolocationAdapter = (): IGeolocationAdapter => {
  return new GeolocationAdapter();
}