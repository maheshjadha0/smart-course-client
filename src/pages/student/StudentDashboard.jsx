import StudentLayout from "../../layouts/StudentLayout";

export default function StudentDashboard() {

  return (

    <StudentLayout>

      <div>

        <h1 className="text-3xl font-bold mb-8">
          Welcome Back 👋
        </h1>

        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-6
        ">

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-gray-500">
              Enrolled Courses
            </h3>

            <p className="text-4xl font-bold mt-2">
              12
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-gray-500">
              Completed
            </h3>

            <p className="text-4xl font-bold mt-2">
              8
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-gray-500">
              Pending
            </h3>

            <p className="text-4xl font-bold mt-2">
              4
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-gray-500">
              Certificates
            </h3>

            <p className="text-4xl font-bold mt-2">
              3
            </p>
          </div>

        </div>

      </div>

    </StudentLayout>

  );
}