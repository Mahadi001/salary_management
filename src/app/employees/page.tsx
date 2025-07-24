"use client";

import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";

const mockData = [
  {
    id: 1,
    name: "John Doe",
    bank: "ABC Bank",
    branch: "Downtown Branch",
    account: "****3210",
    salary: "$75,000",
    role: "Full-Time",
    status: "Pending Review",
  },
  {
    id: 2,
    name: "Jane Smith",
    bank: "XYZ Bank",
    branch: "Central Branch",
    account: "****7890",
    salary: "$25,000",
    role: "Intern",
    status: "Manager 1 Approved",
  },
  {
    id: 3,
    name: "Mike Johnson",
    bank: "DEF Bank",
    branch: "North Branch",
    account: "****1234",
    salary: "$55,000",
    role: "Probationary",
    status: "Fully Approved",
  },
];

export default function EmployeePage() {
  const [search, setSearch] = useState("");

  const filtered = mockData.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <MainLayout>
        <div className="p-6 space-y-6">
          {/* Title */}
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">Employee Management</h2>
              <p className="text-gray-500">Manage employee salary records and banking information</p>
            </div>
            <div className="space-x-2">
              <Button variant="outline">Export Filtered</Button>
              <Button>Add Employee</Button>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg mb-4">Advanced Reporting Filters</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Select>
                <SelectTrigger><SelectValue placeholder="Payment Month" /></SelectTrigger>
                <SelectContent>
                  {["January", "February", "March"].map((m) => (
                    <SelectItem key={m} value={m}>{m}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger><SelectValue placeholder="Bank Branch" /></SelectTrigger>
                <SelectContent>
                  {["Downtown", "North", "Central"].map((b) => (
                    <SelectItem key={b} value={b}>{b}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger><SelectValue placeholder="Approval Status" /></SelectTrigger>
                <SelectContent>
                  {["Pending", "Manager Approved", "Fully Approved"].map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger><SelectValue placeholder="Employee Role" /></SelectTrigger>
                <SelectContent>
                  {["Full-Time", "Intern", "Probationary"].map((r) => (
                    <SelectItem key={r} value={r}>{r}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Quick search */}
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg mb-4">🔍 Quick Search & Legacy Filters</h3>
            <div className="flex flex-wrap gap-4 mb-4">
              <Input
                placeholder="Search by name, bank, or account number..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Select>
                <SelectTrigger><SelectValue placeholder="All Statuses" /></SelectTrigger>
                <SelectContent>
                  {["All", "Pending", "Approved"].map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger><SelectValue placeholder="All Roles" /></SelectTrigger>
                <SelectContent>
                  {["All", "Intern", "Probationary", "Full-Time"].map((r) => (
                    <SelectItem key={r} value={r}>{r}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm border">
                <thead className="bg-gray-50 text-left">
                  <tr className="border-b">
                    <th className="px-4 py-2">Employee</th>
                    <th className="px-4 py-2">Bank Details</th>
                    <th className="px-4 py-2">Salary</th>
                    <th className="px-4 py-2">Role</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((emp) => (
                    <tr key={emp.id} className="border-b">
                      <td className="px-4 py-3">
                        <div className="font-medium">{emp.name}</div>
                        <div className="text-xs text-gray-500">ID: {emp.id}</div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="font-medium">{emp.bank}</div>
                        <div className="text-xs text-gray-500">{emp.branch}</div>
                        <div className="text-xs text-gray-400">Account: {emp.account}</div>
                      </td>
                      <td className="px-4 py-3">{emp.salary}</td>
                      <td className="px-4 py-3">
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                          emp.role === "Full-Time" ? "bg-green-100 text-green-700" :
                          emp.role === "Intern" ? "bg-blue-100 text-blue-700" :
                          "bg-yellow-100 text-yellow-700"
                        }`}>
                          {emp.role}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                          emp.status === "Fully Approved" ? "bg-green-100 text-green-700" :
                          emp.status.includes("Manager") ? "bg-orange-100 text-orange-700" :
                          "bg-gray-200 text-gray-700"
                        }`}>
                          {emp.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center space-x-2">
                        <Button variant="ghost" size="sm"><Eye size={16} /></Button>
                        <Button variant="ghost" size="sm"><Pencil size={16} /></Button>
                        <Button variant="ghost" size="sm" className="text-red-500 hover:bg-red-50"><Trash2 size={16} /></Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </MainLayout>
  );
}
