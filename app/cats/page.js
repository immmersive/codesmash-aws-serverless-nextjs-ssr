import Link from 'next/link'

export default async function Cats() {
  let res = await fetch(`https://tools.estevecastells.com/api/cats/v1?limit=10`);
  let data = await res.json();

  return (
    <>
      <ul>
        {data.map((cat) => (
          <li className="p-2" key={data.indexOf(cat) + 1}>
            <Link href={{
              pathname: `/cat-info/${data.indexOf(cat) + 1}`,
              query: {
                kitty: `${cat}`
              }
            }}>
              {cat}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
