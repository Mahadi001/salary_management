// src/app/layout.tsx
import "@/app/globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Salary Management System",
  description: "Manage payroll, approvals, and employee records.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 text-gray-900">{children}</body>
    </html>
  );
}
