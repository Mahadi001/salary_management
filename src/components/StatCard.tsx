// src/components/StatCard.tsx
import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  subtext?: string;
  color?: "green" | "yellow" | "red" | "blue";
  icon?: ReactNode;
}

export default function StatCard({
  title,
  value,
  subtext,
  color = "blue",
  icon,
}: StatCardProps) {
  const bgColor =
    color === "green"
      ? "bg-green-100 text-green-700"
      : color === "yellow"
      ? "bg-yellow-100 text-yellow-700"
      : color === "red"
      ? "bg-red-100 text-red-700"
      : "bg-blue-100 text-blue-700";

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 flex justify-between items-center">
      <div>
        <h4 className="text-sm text-gray-500">{title}</h4>
        <p className="text-2xl font-bold">{value}</p>
        {subtext && <p className={`mt-1 text-xs ${bgColor} px-2 py-0.5 rounded`}>{subtext}</p>}
      </div>
      <div className="text-gray-400">{icon}</div>
    </div>
  );
}
