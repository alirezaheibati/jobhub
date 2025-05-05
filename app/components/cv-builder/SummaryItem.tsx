interface SummaryItemProps {
  title: string;
  description: string;
}
export default function SummaryItem({ title, description }: SummaryItemProps) {
  return (
    <p className="w-full md:w-1/2 mb-2">
      <span>{title}</span>
      <span>{description}</span>
    </p>
  );
}
