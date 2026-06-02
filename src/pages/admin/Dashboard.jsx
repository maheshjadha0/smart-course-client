import { useEffect, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import { getDashboardStats } from "../../api/dashboardApi";

function Dashboard() {

  const [stats, setStats] = useState(null);

  const loadData = async () => {

    try {

      const data =
        await getDashboardStats();

      setStats(data);

    }
    catch (error) {

      console.log(error);

    }
  };

  useEffect(() => {

    loadData();

  }, []);

  return (

    <AdminLayout>

      <h1 className="text-3xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2>Total Students</h2>

          <p className="text-3xl font-bold mt-3">
            {stats?.totalStudents ?? 0}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2>Total Courses</h2>

          <p className="text-3xl font-bold mt-3">
            {stats?.totalCourses ?? 0}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2>Total Categories</h2>

          <p className="text-3xl font-bold mt-3">
            {stats?.totalCategories ?? 0}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2>Total Revenue</h2>

          <p className="text-3xl font-bold mt-3">
            ₹{stats?.totalRevenue ?? 0}
          </p>
        </div>

      </div>

    </AdminLayout>

  );
}

export default Dashboard;