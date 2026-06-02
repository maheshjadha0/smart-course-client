function Navbar() {
  return (
    <div className="bg-white h-16 shadow px-6 flex items-center justify-between">

      <h1 className="font-bold text-xl">
        Admin Panel
      </h1>

      <button
        className="bg-red-500 text-white px-9 py-8 rounded-lg"
      >
        Logout
      </button>

    </div>
  );
}

export default Navbar;