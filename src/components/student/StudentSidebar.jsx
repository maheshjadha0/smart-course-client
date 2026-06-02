import { Link } from "react-router-dom";

export default function StudentSidebar() {
  return (
    <div className="w-64 bg-slate-900 text-white min-h-screen">

      <div className="p-6 border-b border-slate-700">

        <h1 className="text-2xl font-bold">
          SmartCourse
        </h1>

      </div>

      <nav className="p-4">

        <ul className="space-y-2">

          <li>
            <Link
              to="/student/dashboard"
              className="block px-4 py-3 rounded-lg hover:bg-slate-800"
            >
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              to="/student/courses"
              className="block px-4 py-3 rounded-lg hover:bg-slate-800"
            >
              My Courses
            </Link>
          </li>

          <li>
            <Link
              to="/student/profile"
              className="block px-4 py-3 rounded-lg hover:bg-slate-800"
            >
              Profile
            </Link>
          </li>

          <li>
            <Link
              to="/student/settings"
              className="block px-4 py-3 rounded-lg hover:bg-slate-800"
            >
              Settings
            </Link>
          </li>

        </ul>

      </nav>

    </div>
  );
}