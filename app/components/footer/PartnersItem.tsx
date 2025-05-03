import Link from "next/link";

export default function PartnersItem({ partner }: { partner: string }) {
  return (
    <li className="font-semibold hover:opacity-80">
      <Link href={"#"}>{partner}</Link>
    </li>
  );
}
