'use client';
import { CardLayout } from './card-layout';

type SourceCardProps = {
  id: string;
  displayName: string;
  homepageUrl: string;
  countryCode: string;
  hideBottomBorder: boolean;
};

export const SourceCard = (props: SourceCardProps) => {
  const { id, displayName, homepageUrl, countryCode, hideBottomBorder } = props;
  return (
    <CardLayout hideBottomBorder={hideBottomBorder}>
      <div>{displayName}</div>
      <div>{homepageUrl}</div>
      <div>{countryCode}</div>
    </CardLayout>
  );
};
