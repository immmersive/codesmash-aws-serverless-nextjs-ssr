import Link from 'next/link'

export default async function Users() {
  let res = await fetch(`${process.env.api}/user`, { cache: 'no-store' });
  let data = await res.json();
  
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-3xl mx-auto p-4 shadow-lg rounded-lg">

        <h1 className="text-4xl font-bold text-start mb-6 text-gray-200">List of Users</h1>
        <div className="pb-5">
            <Link href="./user-new">
            <div className="mt-4 px-4 py-2 bg-blue-500 text-white text-center rounded-lg hover:bg-blue-600 transition duration-300">
              Add a new user
            </div>
          </Link>
        </div>
        <ul className="space-y-4 bg-gray-800 p-8 rounded-xl">
          {data.map((user: { sk: string; pk: string; name: string; type: string }, index: number) => (
            <li key={index} className="group p-4 bg-gray-300 hover:bg-gray-200 rounded-lg shadow-lg transition-all duration-200 ease-in-out transform hover:scale-105 hover:shadow-2xl">
              <Link href={{
                pathname: `./user/${user.pk}`//, query: { kitty: `${user.name}` }
              }}>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white text-lg font-bold group-hover:bg-blue-600 transition-colors duration-300">
                      {user.name.charAt(0)} {/* Initial of the user's name */}
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-500 transition-colors duration-300">
                      {user.name}
                    </h2>
                    <p className="text-gray-500">ID: {user.pk} · Type: {user.type}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
