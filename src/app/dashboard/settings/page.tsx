export default function Settings() {
  return (
    <div className='p-6 bg-white rounded-lg shadow-md'>
      <h1 className='text-3xl font-semibold mb-6'>Settings</h1>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-4'>User Profiles</h2>
        <p>Manage user profiles and permissions...</p>
        <button className='bg-blue-500 text-white px-4 py-2 rounded mt-2'>
          Add User
        </button>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-4'>Notification Settings</h2>
        <p>Configure notification preferences...</p>
        <div className='mt-2'>
          <label className='block mb-2'>
            <input type='checkbox' className='mr-2' />
            Email Notifications
          </label>
          <label className='block mb-2'>
            <input type='checkbox' className='mr-2' />
            SMS Notifications
          </label>
        </div>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-4'>General Settings</h2>
        <p>Manage general settings and preferences...</p>
        <div className='mt-2'>
          <label className='block mb-2'>
            <span className='block text-gray-700'>Church Name</span>
            <input
              type='text'
              className='mt-1 p-2 border rounded w-full'
              placeholder='Enter church name'
            />
          </label>
          <label className='block mb-2'>
            <span className='block text-gray-700'>Address</span>
            <input
              type='text'
              className='mt-1 p-2 border rounded w-full'
              placeholder='Enter address'
            />
          </label>
        </div>
      </section>
    </div>
  );
}
