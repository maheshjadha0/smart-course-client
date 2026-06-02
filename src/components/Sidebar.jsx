import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: "📊",
    },
    {
      name: "Categories",
      path: "/admin/categories",
      icon: "📁",
    },
    {
      name: "Courses",
      path: "/admin/courses",
      icon: "🎓",
    },
    {
      name: "Lessons",
      path: "/admin/lessons",
      icon: "📚",
    },
    {
      name: "Enrollments",
      path: "/admin/enrollments",
      icon: "🛒",
    },
  ];

  return (
    <aside
      className="
      w-72
      min-h-screen
      bg-gradient-to-b
      from-slate-950
      via-slate-900
      to-slate-800
      text-white
      shadow-2xl
      flex
      flex-col
      "
    >
      {/* Logo */}

      <div
        className="
        h-20
        flex
        items-center
        justify-center
        border-b
        border-slate-700
        "
      >
        <h1
          className="
          text-3xl
          font-extrabold
          tracking-wide
          "
        >
          SmartCourse
        </h1>
      </div>

      {/* Navigation */}

      <nav className="flex-1 p-5 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`
              flex
              items-center
              gap-4
              px-5
              py-3
              rounded-2xl
              transition-all
              duration-300

              ${
                location.pathname === item.path
                  ? `
                    bg-blue-600
                    shadow-lg
                    shadow-blue-500/30
                    scale-[1]
                  `
                  : `
                    hover:bg-slate-800
                    hover:translate-1
                  `
              }
            `}
          >
            <span className="text-xl">
              {item.icon}
            </span>

            <span className="font-medium">
              {item.name}
            </span>
          </Link>
        ))}
      </nav>

      {/* Bottom Profile */}

      <div
        className="
        border-t
        border-slate-700
        p-5
        "
      >
        <div
          className="
          bg-slate-800
          rounded-2xl
          p-4
          flex
          items-center
          gap-3
          "
        >
          <div
            className="
            w-12
            h-12
            rounded-full
            bg-blue-600
            flex
            items-center
            justify-center
            font-bold
            "
          >
            A
          </div>

          <div>
            <p className="font-semibold">
              Admin
            </p>

            <p className="text-sm text-slate-400">
              Administrator
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;

