import Link from 'next/link';

const searchEntities = [
  { label: 'Works', href: '/search/works' },
  { label: 'Authors', href: '/search/authors' },
  { label: 'Sources', href: '/search/sources' },
  {
    label: 'Institutions',
    href: '/search/institutions'
  }
] as const;

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-24">
        <div className="flex flex-col justify-center items-center w-7/12">
          <h1 className="text-bold text-3xl text-center mb-4">
            Search by entities
          </h1>
          <ul>
            {searchEntities.map((entity, index) => {
              return (
                <li key={index} className="underline">
                  <Link href={entity.href}>{entity.label}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
