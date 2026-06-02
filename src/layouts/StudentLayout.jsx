import StudentSidebar from "../components/student/StudentSidebar";
import StudentNavbar from "../components/student/StudentNavbar";

export default function StudentLayout({ children }) {

  return (

    <div className="flex min-h-screen bg-slate-100">

      <StudentSidebar />

      <div className="flex-1">

        <StudentNavbar />

        <main className="p-8">
          {children}
        </main>

      </div>

    </div>

  );
}