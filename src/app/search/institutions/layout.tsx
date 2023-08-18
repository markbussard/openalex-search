import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search by institutions'
};

export default function InstitutionsLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1 className="text-bold text-3xl text-center my-6">Institutions</h1>
      <div className="items-center justify-center flex flex-col text-left">
        {children}
      </div>
    </>
  );
}
