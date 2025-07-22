// src/app/dashboard/page.tsx
"use client";

import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import StatCard from "@/components/StatCard";
import { Users, Clock, CheckCircle, DollarSign, AlertCircle } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 w-full min-h-screen">
        <Navbar />

        <main className="p-6 bg-gray-100 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <StatCard
              title="Total Employees"
              value="5"
              subtext="+2 this month"
              color="green"
              icon={<Users />}
            />
            <StatCard
              title="Pending Approvals"
              value="2"
              subtext="$100,000 awaiting review"
              color="yellow"
              icon={<Clock />}
            />
            <StatCard
              title="Approved Salaries"
              value="2"
              subtext="$85,000 ready for payroll"
              color="green"
              icon={<CheckCircle />}
            />
            <StatCard
              title="Monthly Payroll"
              value="$85,000"
              subtext="+12% vs last month"
              color="green"
              icon={<DollarSign />}
            />
            <StatCard
              title="Expired Records"
              value="4"
              subtext="Intern/probationary terms ended"
              color="red"
              icon={<AlertCircle />}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
