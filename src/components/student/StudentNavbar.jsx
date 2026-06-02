export default function StudentNavbar() {
  return (
    <div className="
      bg-white
      shadow-sm
      border-b
      h-20
      flex
      items-center
      justify-between
      px-8
    ">

      <h2 className="text-2xl font-bold text-slate-800">
        Student Dashboard
      </h2>

      <div className="flex items-center gap-4">

        <img
          src="https://i.pravatar.cc/40"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />

      </div>

    </div>
  );
}