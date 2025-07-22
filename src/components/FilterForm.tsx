"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Parser } from "json2csv";

export default function FilterForm() {
  const [month, setMonth] = useState("");
  const [branch, setBranch] = useState("");
  const [role, setRole] = useState("");

  const handleExport = () => {
    const fields = ["month", "branch", "role"];
    const jsonData = [{ month, branch, role }];
    const parser = new Parser({ fields });
    const csv = parser.parse(jsonData);

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "filtered-data.csv";
    a.click();

    // Optional: Clean up blob object
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
      <h2 className="text-lg font-semibold mb-4">Advanced Reporting Filters</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Select onValueChange={setMonth}>
          <SelectTrigger>
            <SelectValue placeholder="Payment Month" />
          </SelectTrigger>
          <SelectContent>
            {["January", "February", "March", "April", "May"].map((m) => (
              <SelectItem key={m} value={m}>{m}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={setBranch}>
          <SelectTrigger>
            <SelectValue placeholder="Bank Branch" />
          </SelectTrigger>
          <SelectContent>
            {["All Branches", "Dhaka", "Chittagong", "Sylhet"].map((b) => (
              <SelectItem key={b} value={b}>{b}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={setRole}>
          <SelectTrigger>
            <SelectValue placeholder="Employee Role" />
          </SelectTrigger>
          <SelectContent>
            {["All Roles", "Intern", "Full-time", "Probationary"].map((r) => (
              <SelectItem key={r} value={r}>{r}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button onClick={handleExport} className="w-full md:w-auto">
          Export Filtered Data
        </Button>
      </div>
    </div>
  );
}
