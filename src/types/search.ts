import {
  AuthorResponse,
  InstitutionResponse,
  SourceResponse,
  WorkResponse
} from '.';

export enum SearchEntity {
  Works = 'works',
  Authors = 'authors',
  Sources = 'sources',
  Institutions = 'institutions'
}

export type SearchResult =
  | AuthorResponse
  | InstitutionResponse
  | SourceResponse
  | WorkResponse;

export interface OpenAlexSearchResponse {
  meta: {
    count: number;
    db_response_time_ms: number;
    page: number;
    per_page: number;
  };
  results: SearchResult[];
}

export type SearchQueryParams = {
  q?: string;
  page?: number;
};
