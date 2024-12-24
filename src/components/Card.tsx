interface CardProps {
  title: string;
  value: string;
  color: string;
}

export default function Card({ title, value, color }: CardProps) {
  return (
    <div className={`p-6 rounded-lg shadow-lg text-white ${color}`}>
      <h3 className='text-lg'>{title}</h3>
      <p className='text-4xl font-bold'>{value}</p>
    </div>
  );
}
