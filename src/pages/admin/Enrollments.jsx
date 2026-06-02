import { useEffect, useState } from "react";

import AdminLayout from "../../layouts/AdminLayout";

import EnrollmentModal from "../../components/EnrollmentModal";

import { getStudents } from "../../api/userApi";

import {
  getEnrollments,
  deleteEnrollment,
} from "../../api/enrollmentApi";

import { getCourses } from "../../api/courseApi";

function Enrollments() {
  const [enrollments, setEnrollments] = useState([]);
  const [users, setUsers] = useState([]);
  const [courses, setCourses] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const [selectedEnrollment, setSelectedEnrollment] =
    useState(null);

  const loadData = async () => {
    try {
      const enrollmentsData =
        await getEnrollments();

      const coursesData =
        await getCourses();

      const usersData =
        await getStudents();

      setEnrollments(enrollmentsData);

      setCourses(coursesData);

      setUsers(usersData);

      console.log("Users:", usersData);
      console.log("Courses:", coursesData);
      console.log(
        "Enrollments:",
        enrollmentsData
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const removeEnrollment = async (id) => {
    if (
      !window.confirm(
        "Delete enrollment?"
      )
    )
      return;

    try {
      await deleteEnrollment(id);

      loadData();
    } catch (error) {
      console.log(error);
    }
  };

  const editEnrollment = (
    enrollment
  ) => {
    setSelectedEnrollment(
      enrollment
    );

    setShowModal(true);
  };

  return (
    <AdminLayout>

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-4xl font-bold text-slate-800">
            Enrollments
          </h1>

          <p className="text-slate-500 mt-2">
            Manage course purchases
          </p>

        </div>

        <button
          onClick={() => {
            setSelectedEnrollment(
              null
            );

            setShowModal(true);
          }}
          className="
          bg-blue-600
          hover:bg-blue-700
          text-white
          px-6
          py-3
          rounded-xl
          "
        >
          + Add Enrollment
        </button>

      </div>

      <div className="bg-white rounded-2xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="p-4 text-left">
                Id
              </th>

              <th className="p-4 text-left">
                Student
              </th>

              <th className="p-4 text-left">
                Course
              </th>

              <th className="p-4 text-left">
                Purchase Date
              </th>

              <th className="p-4 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {enrollments.map(
              (
                enrollment
              ) => (
                <tr
                  key={
                    enrollment.id
                  }
                  className="
                  border-t
                  hover:bg-slate-50
                  "
                >

                  <td className="p-4">
                    {
                      enrollment.id
                    }
                  </td>

                  <td className="p-4">

                    {
                      users?.find(
                        (
                          u
                        ) =>
                          u.id ===
                          enrollment.userId
                      )?.fullName ||
                      "N/A"
                    }

                  </td>

                  <td className="p-4">

                    {
                      courses?.find(
                        (
                          c
                        ) =>
                          c.id ===
                          enrollment.courseId
                      )?.title ||
                      "N/A"
                    }

                  </td>

                  <td className="p-4">

                    {new Date(
                      enrollment.purchaseDate
                    ).toLocaleDateString()}

                  </td>

                  <td className="p-4 text-center">

                    <button
                      onClick={() =>
                        editEnrollment(
                          enrollment
                        )
                      }
                      className="
                      bg-yellow-500
                      hover:bg-yellow-600
                      text-white
                      px-4
                      py-2
                      rounded-lg
                      mr-2
                      "
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        removeEnrollment(
                          enrollment.id
                        )
                      }
                      className="
                      bg-red-600
                      hover:bg-red-700
                      text-white
                      px-4
                      py-2
                      rounded-lg
                      "
                    >
                      Delete
                    </button>

                  </td>

                </tr>
              )
            )}

          </tbody>

        </table>

      </div>

      {showModal && (
        <EnrollmentModal
          enrollment={
            selectedEnrollment
          }
          users={users}
          courses={courses}
          onClose={() => {
            setShowModal(false);

            setSelectedEnrollment(
              null
            );
          }}
          onSuccess={() => {
            loadData();

            setShowModal(false);

            setSelectedEnrollment(
              null
            );
          }}
        />
      )}

    </AdminLayout>
  );
}

export default Enrollments;