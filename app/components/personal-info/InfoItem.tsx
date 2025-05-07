interface InfoItemProps {
  title: string;
  description: string;
}
export default function InfoItem({ title, description }: InfoItemProps) {
  return (
    <div className="w-full md:w-1/2 mb-2 last:w-full">
      <p className="font-semibold">{title}</p>
      <p className="opacity-60">{description}</p>
    </div>
  );
}
