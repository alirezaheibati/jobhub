interface FeatureProps {
  statistics: string;
  featureInfo: string;
}
export default function Feature({ statistics, featureInfo }: FeatureProps) {
  return (
    <div className="text-center w-5/6 md:w-1/3 max-w-[300px] text-primary">
      <h3 className="font-bold text-4xl mb-2 ">{statistics}</h3>
      <p>{featureInfo}</p>
    </div>
  );
}
