import { InstitutionCard, SearchBox } from '@/components';
import { InstitutionResponse, SearchEntity } from '@/types';
import { getSearchResponse } from '@/utils';

type InstitutionsPageProps = {
  searchParams: {
    q?: string;
  };
};

const getFormattedLocation = (geo: InstitutionResponse['geo']) => {
  const { city, region, country } = geo;
  let location = city;
  if (region) location += `, ${region}`;
  if (country) location += `, ${country}`;
  return location;
};

export default async function InstitutionsPage({
  searchParams
}: InstitutionsPageProps) {
  const searchResponse = await getSearchResponse({
    entity: SearchEntity.Institutions,
    q: searchParams.q
  });

  if (!searchResponse) {
    return <p>No response returned</p>;
  }

  const results = searchResponse.results as InstitutionResponse[];

  return (
    <>
      <SearchBox />
      {results?.map((result, index) => {
        return (
          <InstitutionCard
            key={result.id}
            id={result.id}
            displayName={result.display_name}
            type={result.type}
            location={getFormattedLocation(result.geo)}
            hideBottomBorder={index === results.length}
          />
        );
      })}
    </>
  );
}
