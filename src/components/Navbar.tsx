// src/components/Navbar.tsx
const Navbar = () => {
  return (
    <header className="h-16 w-full flex items-center justify-between px-6 border-b bg-white shadow-sm">
      <h1 className="text-lg font-semibold">Dashboard</h1>
      <div className="text-sm text-gray-600">Admin User</div>
    </header>
  );
};

export default Navbar;
