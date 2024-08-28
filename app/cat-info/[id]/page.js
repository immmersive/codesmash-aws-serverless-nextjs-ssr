import cats from '../../cat-list.js'

export default function Page({ params }) {
  const { id } = params;
  const cat = cats.find((cat) => cat.id === id);

  if (!cat) {
    return <div>Cat not found</div>;
  }
  return (
    <>
      <div className="p-8 flex flex-col justify-center items-center">
        <h2 className="mb-3 text-2xl font-semibold">Cat Info: {cat.name}</h2>
        <p className="py-5">{cat.id}</p>
      </div>
    </>
  )
}
