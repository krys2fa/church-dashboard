"use client";

import Card from "@/components/Card";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
} from "recharts";

const data = [
  { title: "Total Members", value: "256", color: "bg-blue-500" },
  { title: "Events This Month", value: "12", color: "bg-green-500" },
  { title: "Donations", value: "$12,500", color: "bg-yellow-500" },
];

const attendanceData = [
  { month: "Jan", attendance: 120 },
  { month: "Feb", attendance: 150 },
  { month: "Mar", attendance: 180 },
  { month: "Apr", attendance: 130 },
  { month: "May", attendance: 200 },
];

const donationData = [
  { month: "Jan", donations: 500 },
  { month: "Feb", donations: 800 },
  { month: "Mar", donations: 600 },
  { month: "Apr", donations: 1000 },
  { month: "May", donations: 700 },
];

const eventData = [
  { month: "Jan", events: 3 },
  { month: "Feb", events: 5 },
  { month: "Mar", events: 2 },
  { month: "Apr", events: 4 },
  { month: "May", events: 6 },
];

const membersData = [
  { month: "Jan", members: 300 },
  { month: "Feb", members: 500 },
  { month: "Mar", members: 200 },
  { month: "Apr", members: 400 },
  { month: "May", members: 600 },
];

export default function Analytics() {
  return (
    <div className='p-6 bg-white rounded-lg shadow-md'>
      <h2 className='text-2xl font-bold mb-4'>Church Analytics</h2>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
        {data.map((item) => (
          <Card key={item.title} {...item} />
        ))}
      </div>

      <div className='grid grid-cols-2 gap-4'>
        <div className='bg-white p-4 rounded-lg shadow-md'>
          <h3 className='text-xl font-semibold mb-2'>Attendance Overview</h3>
          <ResponsiveContainer width='100%' height={300}>
            <BarChart data={attendanceData}>
              <XAxis dataKey='month' />
              <YAxis />
              <Tooltip />
              <Bar dataKey='attendance' fill='#203d42' />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className='bg-white p-4 rounded-lg shadow-md'>
          <h3 className='text-xl font-semibold mb-2'>Donations</h3>
          <ResponsiveContainer width='100%' height={300}>
            <LineChart data={donationData}>
              <XAxis dataKey='month' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type='monotone' dataKey='donations' stroke='#FFB300' />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className='bg-white p-4 rounded-lg shadow-md'>
          <h3 className='text-xl font-semibold mb-2'>Events</h3>
          <ResponsiveContainer width='100%' height={300}>
            <BarChart data={eventData}>
              <XAxis dataKey='month' />
              <YAxis />
              <Tooltip />
              <Bar dataKey='events' fill='#33c55e' />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className='bg-white p-4 rounded-lg shadow-md'>
          <h3 className='text-xl font-semibold mb-2'>Members</h3>
          <ResponsiveContainer width='100%' height={300}>
            <LineChart data={membersData}>
              <XAxis dataKey='month' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type='monotone' dataKey='members' stroke='#3b82f6' />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
