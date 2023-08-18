import { OpenAlexSearchResponse, SearchEntity, SearchResult } from '@/types';

interface SearchResponsePayload {
  q?: string;
  page?: number;
  entity: SearchEntity;
}

export async function getSearchResponse(payload: SearchResponsePayload) {
  console.log('getSearchResponse called with', payload);
  const { q, page, entity } = payload;
  try {
    const selectFields = SELECT_FIELDS[entity];
    const url = new URL(
      `https://api.openalex.org/${entity}?select=${selectFields}}`
    );
    const params = new URLSearchParams({ select: selectFields });

    if (q) params.append('search', q);
    if (page) params.append('page', page.toString());

    url.search = params.toString();
    console.log('making request using url', url.toString());
    const res = await fetch(url.toString());
    const data = (await res.json()) as OpenAlexSearchResponse;
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

const SELECT_FIELDS = {
  [SearchEntity.Works]:
    'id,doi,title,display_name,publication_year,publication_date,ids,language',
  [SearchEntity.Authors]:
    'id,display_name,x_concepts,works_count,works_api_url,last_known_institution',
  [SearchEntity.Sources]:
    'id,display_name,homepage_url,country_code,x_concepts',
  [SearchEntity.Institutions]: 'id,display_name,type,geo,x_concepts'
};
