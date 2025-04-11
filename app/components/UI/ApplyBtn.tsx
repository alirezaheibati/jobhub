import { ReactNode } from "react";

export default function ApplyBtn({ children }: { children: ReactNode }) {
  return (
    <button className="bg-primary text-xs w-full text-slate-50 rounded-full py-2 hover:opacity-90">
      {children}
    </button>
  );
}
