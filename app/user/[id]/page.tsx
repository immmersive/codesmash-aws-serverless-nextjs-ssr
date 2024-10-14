import { updateUser, deleteUser } from './actions'; 
import Link from 'next/link';
import { Repo } from '../../Repo'

export const dynamic = 'force-dynamic'; 

export default async function User({ params }: { params: { id: string } }) {
  const { id } = params; 
  const res = await fetch(`${new Repo().getCloudFrontApiUrl()}/user/${id}`, { cache: 'no-store' });
  const data = await res.json();

  if (!data.pk) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h2 className="mb-3 text-2xl font-semibold text-red-500">User not found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto min-h-screen flex flex-col items-center justify-start pt-6">
        <h1 className="text-4xl font-bold text-start my-6 text-gray-200 w-full">User Info</h1>
        <div className='flex w-full'>
            <Link href="/users" className='w-fullflex-1'>
                <div className="mb-5 px-4 py-2 bg-blue-500 text-white text-center rounded-lg hover:bg-blue-600 transition duration-300 flex-1">
                    Back to users
                </div>
            </Link>
            <div className='px-4'></div> 
            <form action={deleteUser} method="DELETE">
                <input type="hidden" name="id" value={id} />
                <button type="submit" className="mb-5 px-4 py-2 bg-red-500 text-white text-center rounded-lg hover:bg-blue-600 transition duration-300 flex-1">
                    Delete user
                </button> 
            </form> 
        </div>
      <div className="bg-gray-800 shadow-lg rounded-xl p-8 w-full max-w-3xl">
        <div className="flex flex-col items-center space-y-6">
          <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center text-white text-4xl font-bold">
            {data.name.charAt(0)}
          </div>

          <h2 className="text-3xl font-bold text-white">{data.name}</h2> 
          <p className="text-gray-400 text-lg">ID: {data.pk} · Type: {data.type}</p> 
 
          <form action={updateUser} className="flex flex-col space-y-4 w-full">
            
            <input type="hidden" name="id" value={id} />

            <label className="text-lg font-semibold text-white">Name:</label>
            <input
              type="text"
              name="name"
              defaultValue={data.name}
              className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
            />

            <label className="text-lg font-semibold text-white">Info:</label>
            <textarea
              name="info"
              defaultValue={data.info}
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 w-full"
              rows={5}
            />

            <div className="py-4"></div>

            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 w-full"
            >
              Update Info
            </button>
          </form>

        </div>
      </div>
      
    </div>
  );
}
