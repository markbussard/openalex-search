'use client';
import { CardLayout } from './card-layout';

type AuthorCardProps = {
  id: string;
  displayName: string;
  worksApiUrl: string;
  worksCount: string;
  lastKnownInstitution: {
    id: string;
    ror: string;
    displayName: string;
    countryCode: string;
    type: string;
  };
  hideBottomBorder: boolean;
};

export const AuthorCard = (props: AuthorCardProps) => {
  const { id, displayName, worksApiUrl, worksCount, hideBottomBorder } = props;

  return (
    <CardLayout hideBottomBorder={hideBottomBorder}>
      <div>{displayName}</div>
      <div>{worksApiUrl}</div>
      <div>{worksCount}</div>
    </CardLayout>
  );
};
