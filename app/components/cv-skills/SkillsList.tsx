import SkillItem from "./SkillItem";

interface SkillsListProps {
  skills: string;
}
export default function SkillsList({ skills }: SkillsListProps) {
  const skillsArray = skills.split(", ");
  return (
    <div className="flex justify-start gap-2 items-center flex-wrap">
      {skillsArray.map((skill, idx) => (
        <SkillItem key={idx} title={skill} removeable={false} />
      ))}
    </div>
  );
}
