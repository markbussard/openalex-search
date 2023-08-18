import { SearchBox, WorkCard } from '@/components';
import { AuthorResponse, SearchEntity } from '@/types';
import { getSearchResponse } from '@/utils';

type AuthorsPageProps = {
  searchParams: {
    q?: string;
  };
};

export default async function AuthorsPage({ searchParams }: AuthorsPageProps) {
  const searchResponse = await getSearchResponse({
    entity: SearchEntity.Authors,
    q: searchParams.q
  });

  if (!searchResponse) {
    return <p>No response returned</p>;
  }

  const results = searchResponse.results as AuthorResponse[];

  return (
    <>
      <SearchBox />
      {results?.map((result, index) => {
        return (
          <WorkCard
            key={result.id}
            title={result.display_name}
            description={result.last_known_institution?.display_name}
            hideBottomBorder={index === results.length}
          />
        );
      })}
    </>
  );
}
