'use client';
import { CardLayout } from './card-layout';

type InstitutionCardProps = {
  id: string;
  displayName: string;
  type: string;
  location: string;
  hideBottomBorder: boolean;
};

export const InstitutionCard = (props: InstitutionCardProps) => {
  const { id, displayName, type, location, hideBottomBorder } = props;

  return (
    <CardLayout hideBottomBorder={hideBottomBorder}>
      <div>{displayName}</div>
      <div>{type}</div>
      <div>{location}</div>
    </CardLayout>
  );
};
