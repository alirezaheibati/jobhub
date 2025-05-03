import Link from "next/link";

export default function NavItem({
  title,
  linkTo,
}: {
  title: string;
  linkTo: string;
}) {
  return (
    <li className="font-semibold hover:opacity-80">
      <Link href={linkTo}>{title}</Link>
    </li>
  );
}
