"use client";

import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Events() {
  const [searchTerm, setSearchTerm] = useState("");

  const events = [
    { name: "Sunday Service", date: "2023-01-01", location: "Main Hall" },
    { name: "Choir Practice", date: "2023-01-08", location: "Room 101" },
    { name: "Youth Meeting", date: "2023-01-15", location: "Room 202" },
  ];

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='p-6 bg-white rounded-lg shadow-md'>
      <h1 className='text-3xl font-semibold mb-6'>Events</h1>
      <input
        type='text'
        placeholder='Search by event name...'
        className='mb-4 p-2 border rounded w-full'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table className='min-w-full bg-white'>
        <thead>
          <tr>
            <th className='py-2 px-4 border-b'>Name</th>
            <th className='py-2 px-4 border-b'>Date</th>
            <th className='py-2 px-4 border-b'>Location</th>
            <th className='py-2 px-4 border-b'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEvents.map((event, index) => (
            <tr key={index}>
              <td className='py-2 px-4 border-b'>{event.name}</td>
              <td className='py-2 px-4 border-b'>{event.date}</td>
              <td className='py-2 px-4 border-b'>{event.location}</td>
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
          ))}
        </tbody>
      </table>
    </div>
  );
}
