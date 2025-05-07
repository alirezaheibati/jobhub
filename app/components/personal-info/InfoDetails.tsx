import InfoItem from "./InfoItem";

interface InfoDetailsProps {
  email: string;
  mobile: string;
  province: string;
  address: string;
  maritalStatus: string;
  birthYear: number;
  gender: string;
}
export default function InfoDetails({
  email,
  mobile,
  province,
  address,
  maritalStatus,
  gender,
  birthYear,
}: InfoDetailsProps) {
  return (
    <div className="flex justify-between items-center flex-wrap">
      <InfoItem title="Email Address: " description={email} />
      <InfoItem title="Mobile Number: " description={mobile} />
      <InfoItem title="Gender: " description={gender} />
      <InfoItem title="Year Of Birth: " description={String(birthYear)} />
      <InfoItem title="Marital Status: " description={maritalStatus} />
      <InfoItem title="Province: " description={province} />
      <InfoItem title="Address: " description={address} />
    </div>
  );
}
