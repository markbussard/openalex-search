import { Concept } from '.';

export interface AuthorResponse {
  id: string;
  display_name: string;
  x_concepts: Concept[];
  works_count: number;
  works_api_url: string;
  last_known_institution: {
    id: string;
    ror: string;
    display_name: string;
    country_code: string;
    type: String;
  };
}
