export type WorkResponseIds = {
  openalex: string;
  doi: string;
  mag: string;
  pmid: string;
};

export interface WorkResponse {
  id: string;
  doi: string;
  title: string;
  display_name: string;
  publication_year: number;
  publication_date: string;
  ids: WorkResponseIds;
  language: 'en';
}
