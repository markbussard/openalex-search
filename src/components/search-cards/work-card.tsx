'use client';
import { CardLayout } from './card-layout';

type WorkCardProps = {
  title: string;
  description: string;
  hideBottomBorder: boolean;
};

export const WorkCard = (props: WorkCardProps) => {
  const { title, description, hideBottomBorder } = props;

  return (
    <CardLayout hideBottomBorder={hideBottomBorder}>
      <div>{title}</div>
      <div>{description}</div>
    </CardLayout>
  );
};
