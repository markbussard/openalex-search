'use client';
import clsx from 'clsx';

type CardLayoutProps = {
  children: React.ReactNode;
  hideBottomBorder: boolean;
};

export const CardLayout = ({ children, hideBottomBorder }: CardLayoutProps) => {
  return (
    <div
      className={clsx(
        'flex flex-col w-full py-2 px-1',
        hideBottomBorder ? '' : 'border-b'
      )}
    >
      {children}
    </div>
  );
};
