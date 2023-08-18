import { SearchBox, SourceCard } from '@/components';
import { SearchEntity, SourceResponse } from '@/types';
import { getSearchResponse } from '@/utils';

type WorksPageProps = {
  searchParams: {
    q?: string;
  };
};

export default async function SourcesPage({ searchParams }: WorksPageProps) {
  const searchResponse = await getSearchResponse({
    entity: SearchEntity.Sources,
    q: searchParams.q
  });

  if (!searchResponse) {
    return <p>No response returned</p>;
  }

  const results = searchResponse.results as SourceResponse[];

  return (
    <>
      <SearchBox />
      {results?.map((result, index) => {
        return (
          <SourceCard
            key={result.id}
            id={result.id}
            displayName={result.display_name}
            homepageUrl={result.homepage_url}
            countryCode={result.country_code}
            hideBottomBorder={index === results.length}
          />
        );
      })}
    </>
  );
}
