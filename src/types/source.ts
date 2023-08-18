import { Concept } from '.';

export interface SourceResponse {
  id: string;
  display_name: string;
  homepage_url: string;
  country_code: string;
  x_concepts: Concept[];
}
