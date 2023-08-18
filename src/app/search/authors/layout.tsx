import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search by authors'
};

export default function AuthorsLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1 className="text-bold text-3xl text-center my-6">Authors</h1>
      <div className="items-center justify-center flex flex-col text-left">
        {children}
      </div>
    </>
  );
}
