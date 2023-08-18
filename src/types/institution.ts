import { Concept } from '.';

type GeoLocation = {
  city: string;
  country: string;
  country_code: string;
  geonames_city_id: string;
  latitude: number;
  longitude: number;
  region: string;
};

export interface InstitutionResponse {
  id: string;
  display_name: string;
  type: string;
  geo: GeoLocation;
  x_concepts: Concept[];
}
