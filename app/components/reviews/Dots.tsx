"use client";
interface DotProps {
  dotNumber: number;
  onSelectDot: (dotNumber: number) => void;
  activeDot: boolean;
}
export default function Dots({ dotNumber, onSelectDot, activeDot }: DotProps) {
  return (
    <div
      className={`h-3 rounded-full cursor-pointer transition-[width] duration-200 ${
        activeDot ? " w-6 bg-primary" : " w-3 bg-slate-300"
      }`}
      onClick={() => onSelectDot(dotNumber)}
    ></div>
  );
}
