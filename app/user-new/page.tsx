import { addUser } from './actions';
import Link from 'next/link'; 
import { v4 as uuidv4 } from 'uuid'; 

export default async function UserNew() {
  const id = uuidv4();  
  var name = '';
  var info = '';
 
  return (
    <div className="max-w-3xl mx-auto min-h-screen flex flex-col items-center justify-start pt-6">
        <h1 className="text-4xl font-bold text-start my-6 text-gray-200 w-full">New User</h1>
        <Link href="/users" className='w-full'>
            <div className="mb-5 px-4 py-2 bg-blue-500 text-white text-center rounded-lg hover:bg-blue-600 transition duration-300 w-full">
            Back to users
            </div>
          </Link>
      <div className="bg-gray-800 shadow-lg rounded-xl p-8 w-full max-w-3xl">
        <div className="flex flex-col items-center space-y-6">
          <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center text-white text-4xl font-bold">
            {"..."}
          </div>

          <h2 className="text-3xl font-bold text-white"></h2> 
          <p className="text-gray-400 text-lg">ID: {id} · Type: user</p> 
 
          <form action={addUser} className="flex flex-col space-y-4 w-full">
            
            <input type="hidden" name="id" value={id} />

            <label className="text-lg font-semibold text-white">Name:</label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
            />

            <label className="text-lg font-semibold text-white">Info:</label>
            <textarea
              name="info"
              defaultValue={info}
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 w-full"
              rows={5}
            />

            <div className="py-4"></div>

            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 w-full"
            >
              Add user
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}
