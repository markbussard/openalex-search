import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search by sources'
};

export default function SourcesLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1 className="text-bold text-3xl text-center my-6">Sources</h1>
      <div className="items-center justify-center flex flex-col text-left">
        {children}
      </div>
    </>
  );
}
