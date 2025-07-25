import { Menu } from "lucide-react";

export default function Navbar({ toggleSidebar }: { toggleSidebar: () => void }) {
  return (
    <header className="h-16 w-full flex items-center justify-between px-6 border-b bg-white shadow-sm">
      <button className="md:hidden" onClick={toggleSidebar}>
        <Menu className="h-5 w-5" />
      </button>
      <h1 className="text-lg font-semibold">Dashboard</h1>
    </header>
  );
}
