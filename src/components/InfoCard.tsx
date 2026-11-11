import type { ReactNode } from "react";

type InfoCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  dark: boolean;
};

export default function InfoCard({ icon, title, description, dark }: InfoCardProps) {
  return (
    <div className={`rounded-2xl border p-5 ${dark ? "border-white/10 bg-white/[0.03]" : "border-gray-200 bg-white"}`}>
      <div className="text-lime-500">{icon}</div>
      <h3 className="mt-4 font-bold">{title}</h3>

      <p className={`mt-2 text-sm leading-6 ${dark ? "text-gray-400" : "text-gray-600"}`}>{description}</p>
    </div>
  );
}
