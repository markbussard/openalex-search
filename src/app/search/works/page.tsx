import { SearchBox, WorkCard } from '@/components';
import { SearchEntity, WorkResponse } from '@/types';
import { getSearchResponse } from '@/utils';

type WorksPageProps = {
  searchParams: {
    q?: string;
  };
};

export default async function WorksPage({ searchParams }: WorksPageProps) {
  const searchResponse = await getSearchResponse({
    entity: SearchEntity.Works,
    q: searchParams.q
  });

  if (!searchResponse) {
    return <p>No response returned</p>;
  }

  const results = searchResponse.results as WorkResponse[];

  return (
    <>
      <SearchBox />
      {results?.map((result, index) => {
        return (
          <WorkCard
            key={result.id}
            title={result.display_name}
            description={result.doi}
            hideBottomBorder={index === results.length}
          />
        );
      })}
    </>
  );
}
