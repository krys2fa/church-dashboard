export default function Events() {
  return (
    <div className='p-6 bg-white rounded-lg shadow-md'>
      <h1 className='text-3xl font-semibold mb-6'>Events</h1>
      <table className='min-w-full bg-white'>
        <thead>
          <tr>
            <th className='py-2 px-4 border-b'>Name</th>
            <th className='py-2 px-4 border-b'>Role</th>
            <th className='py-2 px-4 border-b'>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='py-2 px-4 border-b'>John Doe</td>
            <td className='py-2 px-4 border-b'>Pastor</td>
            <td className='py-2 px-4 border-b'>john@example.com</td>
          </tr>
          <tr>
            <td className='py-2 px-4 border-b'>Jane Smith</td>
            <td className='py-2 px-4 border-b'>Choir Leader</td>
            <td className='py-2 px-4 border-b'>jane@example.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
