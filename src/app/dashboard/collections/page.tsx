import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

export default function Collections() {
  return (
    <div className='p-6 bg-white rounded-lg shadow-md'>
      <h1 className='text-3xl font-semibold mb-6'>Collections</h1>
      <table className='min-w-full bg-white'>
        <thead>
          <tr>
            <th className='py-2 px-4 border-b'>Date</th>
            <th className='py-2 px-4 border-b'>Amount</th>
            <th className='py-2 px-4 border-b'>Collected By</th>
            <th className='py-2 px-4 border-b'>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='py-2 px-4 border-b'>2023-01-01</td>
            <td className='py-2 px-4 border-b'>$500</td>
            <td className='py-2 px-4 border-b'>John Doe</td>
            <td className='py-2 px-4 border-b'>
              <div className='flex space-x-2'>
                <button className='bg-blue-500 text-white px-2 py-1 rounded flex items-center'>
                  <PencilIcon className='h-5 w-5' />
                </button>
                <button className='bg-red-500 text-white px-2 py-1 rounded flex items-center'>
                  <TrashIcon className='h-5 w-5' />
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td className='py-2 px-4 border-b'>2023-01-08</td>
            <td className='py-2 px-4 border-b'>$450</td>
            <td className='py-2 px-4 border-b'>Jane Smith</td>
            <td className='py-2 px-4 border-b'>
              <div className='flex space-x-2'>
                <button className='bg-blue-500 text-white px-2 py-1 rounded flex items-center'>
                  <PencilIcon className='h-5 w-5' />
                </button>
                <button className='bg-red-500 text-white px-2 py-1 rounded flex items-center'>
                  <TrashIcon className='h-5 w-5' />
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td className='py-2 px-4 border-b'>2023-01-15</td>
            <td className='py-2 px-4 border-b'>$600</td>
            <td className='py-2 px-4 border-b'>Michael Brown</td>
            <td className='py-2 px-4 border-b'>
              <div className='flex space-x-2'>
                <button className='bg-blue-500 text-white px-2 py-1 rounded flex items-center'>
                  <PencilIcon className='h-5 w-5' />
                </button>
                <button className='bg-red-500 text-white px-2 py-1 rounded flex items-center'>
                  <TrashIcon className='h-5 w-5' />
                </button>
              </div>
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
}
