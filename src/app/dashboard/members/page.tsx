"use client";

import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Members() {
  const [searchTerm, setSearchTerm] = useState("");

  const members = [
    { name: "John Doe", role: "Pastor", email: "john@example.com" },
    { name: "Jane Smith", role: "Choir Leader", email: "jane@example.com" },
    { name: "Michael Brown", role: "Usher", email: "michael@example.com" },
  ];

  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='p-6 bg-white rounded-lg shadow-md'>
      <h1 className='text-3xl font-semibold mb-6'>Members</h1>
      <input
        type='text'
        placeholder='Search by name...'
        className='mb-4 p-2 border rounded w-full'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table className='min-w-full bg-white'>
        <thead>
          <tr>
            <th className='py-2 px-4 border-b'>Name</th>
            <th className='py-2 px-4 border-b'>Role</th>
            <th className='py-2 px-4 border-b'>Email</th>
            <th className='py-2 px-4 border-b'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredMembers.map((member, index) => (
            <tr key={index}>
              <td className='py-2 px-4 border-b'>{member.name}</td>
              <td className='py-2 px-4 border-b'>{member.role}</td>
              <td className='py-2 px-4 border-b'>{member.email}</td>
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
