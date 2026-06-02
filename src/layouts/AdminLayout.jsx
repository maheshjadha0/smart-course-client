import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function AdminLayout({ children }) {
  return (
    <div className="flex w-full bg-slate-100">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <main className="p-6">
          {children}
        </main>

      </div>

    </div>
  );
}

export default AdminLayout;