import Card from "@/components/Card";

const data = [
  { title: "Total Members", value: "256", color: "bg-blue-500" },
  { title: "Events This Month", value: "12", color: "bg-green-500" },
  { title: "Donations", value: "$12,500", color: "bg-yellow-500" },
];

export default function Home() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
      {data.map((item) => (
        <Card key={item.title} {...item} />
      ))}
    </div>
  );
}
