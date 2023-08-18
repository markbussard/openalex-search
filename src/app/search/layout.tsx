export default function SearchLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="max-w-7xl w-full px-8 justify-center items-center">
        {children}
      </div>
    </div>
  );
}
