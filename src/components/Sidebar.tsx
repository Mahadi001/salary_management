// src/components/Sidebar.tsx
import { Home, Users, CheckCircle, FileText, Settings } from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  const menu = [
    { name: "Dashboard", icon: <Home size={18} />, href: "/dashboard" },
    { name: "Employees", icon: <Users size={18} />, href: "#" },
    { name: "Approvals", icon: <CheckCircle size={18} />, href: "#" },
    { name: "Reports", icon: <FileText size={18} />, href: "#" },
    { name: "Settings", icon: <Settings size={18} />, href: "#" },
  ];

  return (
    <aside className="w-64 h-screen bg-white shadow-md fixed top-0 left-0 flex flex-col">
      <div className="text-xl font-bold p-6 border-b">💲 Salary Management</div>
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {menu.map((item, idx) => (
            <li key={idx}>
              <Link
                href={item.href}
                className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition"
              >
                {item.icon}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
