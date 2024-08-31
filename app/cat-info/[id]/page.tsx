export interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function CatInfo({ searchParams } : PageProps) {
  const kitty = searchParams.kitty;

  if (!kitty) {
    return <div>Cat not found</div>;
  }
  return (
    <>
      <div className="p-8 flex flex-col justify-center items-center">
        <h2 className="mb-3 text-2xl font-semibold">{kitty}</h2>
      </div>
    </>
  )
}
