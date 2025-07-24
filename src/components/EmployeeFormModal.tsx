"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function EmployeeFormModal({
  type = "add",
  initialData = {},
}: {
  type?: "add" | "edit";
  initialData?: any;
}) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: initialData.name || "",
    bank: initialData.bank || "",
    salary: initialData.salary || "",
    role: initialData.role || "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log(`${type === "add" ? "Adding" : "Editing"} employee`, formData);
    setOpen(false);
    // POST/PUT to backend here
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>{type === "add" ? "Add Employee" : "Edit"}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{type === "add" ? "Add New" : "Edit"} Employee</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {["name", "bank", "salary", "role"].map((field) => (
            <div key={field}>
              <Label htmlFor={field}>{field.toUpperCase()}</Label>
              <Input
                id={field}
                value={formData[field]}
                onChange={(e) => handleChange(field, e.target.value)}
              />
            </div>
          ))}
        </div>
        <Button className="mt-4 w-full" onClick={handleSubmit}>
          {type === "add" ? "Add" : "Update"}
        </Button>
      </DialogContent>
    </Dialog>
  );
}
