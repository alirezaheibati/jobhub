interface SkillProps {
  skill: string;
}
export default function Skill({ skill }: SkillProps) {
  return (
    <p className="rounded-full text-primary bg-sky-100 text-xs font-semibold py-1 px-2">
      {skill}
    </p>
  );
}
