interface AboutDetailsProps {
  about: string;
}
export default function AboutDetails({ about }: AboutDetailsProps) {
  return (
    <div className="">
      <p>{about}</p>
    </div>
  );
}
