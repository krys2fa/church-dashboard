"use client";

import { PencilIcon, TrashIcon, CheckIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Approvals() {
  const [searchTerm, setSearchTerm] = useState("");

  const approvals = [
    { date: "2023-01-01", amount: "$500", collectedBy: "John Doe" },
    { date: "2023-01-08", amount: "$450", collectedBy: "Jane Smith" },
    { date: "2023-01-15", amount: "$600", collectedBy: "Michael Brown" },
  ];

  const filteredApprovals = approvals.filter((approval) =>
    approval.collectedBy.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='p-6 bg-white rounded-lg shadow-md'>
      <h1 className='text-3xl font-semibold mb-6'>Approvals</h1>
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
            <th className='py-2 px-4 border-b'>Date</th>
            <th className='py-2 px-4 border-b'>Amount</th>
            <th className='py-2 px-4 border-b'>Collected By</th>
            <th className='py-2 px-4 border-b'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredApprovals.map((approval, index) => (
            <tr key={index}>
              <td className='py-2 px-4 border-b'>{approval.date}</td>
              <td className='py-2 px-4 border-b'>{approval.amount}</td>
              <td className='py-2 px-4 border-b'>{approval.collectedBy}</td>
              <td className='py-2 px-4 border-b'>
                <div className='flex space-x-2'>
                  <button className='bg-green-500 text-white px-2 py-1 rounded flex items-center'>
                    <CheckIcon className='h-5 w-5' />
                  </button>
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
