import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search by works'
};

export default function WorksLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1 className="text-bold text-3xl text-center my-6">Works</h1>
      <div className="items-center justify-center flex flex-col text-left">
        {children}
      </div>
    </>
  );
}
