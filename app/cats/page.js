import Link from 'next/link'
import cats from '../cat-list'

export default function Cats() {
  return (
    <>
      <ul>
        {cats.map((cat) => (

          <li className="p-2" key={cat.id}>
            <Link href={{
              pathname: `/cat-info/${cat.id}`,
            }}>
              {cat.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
