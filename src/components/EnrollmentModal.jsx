import { useState, useEffect } from "react";

import {
  createEnrollment,
  updateEnrollment
} from "../api/enrollmentApi";

function EnrollmentModal({
  enrollment,
  users,
  courses,
  onClose,
  onSuccess
}) {

  const [formData, setFormData] =
    useState({
      userId: "",
      courseId: ""
    });

  useEffect(() => {

    if (enrollment) {

      setFormData({
        userId:
          enrollment.userId,
        courseId:
          enrollment.courseId
      });

    }
    else {

      setFormData({
        userId: "",
        courseId: ""
      });

    }

  }, [enrollment]);

  const handleChange =
    (e) => {

      setFormData({
        ...formData,
        [e.target.name]:
          Number(e.target.value)
      });

    };

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        if (enrollment) {

          await updateEnrollment(
            enrollment.id,
            formData
          );

        }
        else {

          await createEnrollment(
            formData
          );

        }

        onSuccess();

      }
      catch (error) {

        console.log(error);

      }

    };

  return (

    <div
      className="
      fixed inset-0
      bg-black/50
      flex justify-center
      items-center
      z-50
      "
    >

      <div
        className="
        bg-white
        rounded-3xl
        w-full
        max-w-xl
        p-8
        shadow-2xl
        "
      >

        <h2
          className="
          text-2xl
          font-bold
          mb-6
          "
        >
          {
            enrollment
              ? "Edit Enrollment"
              : "Add Enrollment"
          }
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div>

            <label
              className="
              block
              mb-2
              font-medium
              "
            >
              Student
            </label>

            <select
              name="userId"
              value={formData.userId}
              onChange={handleChange}
              className="
              w-full
              border
              p-3
              rounded-xl
              "
            >

              <option value="">
                Select Student
              </option>

              {
                users.map(user => (

                  <option
                    key={user.id}
                    value={user.id}
                  >
                    {user.fullName}
                  </option>

                ))
              }

            </select>

          </div>

          <div>

            <label
              className="
              block
              mb-2
              font-medium
              "
            >
              Course
            </label>

            <select
              name="courseId"
              value={formData.courseId}
              onChange={handleChange}
              className="
              w-full
              border
              p-3
              rounded-xl
              "
            >

              <option value="">
                Select Course
              </option>

              {
                courses.map(course => (

                  <option
                    key={course.id}
                    value={course.id}
                  >
                    {course.title}
                  </option>

                ))
              }

            </select>

          </div>

          <div
            className="
            flex
            justify-end
            gap-3
            pt-4
            "
          >

            <button
              type="button"
              onClick={onClose}
              className="
              px-5
              py-3
              border
              rounded-xl
              "
            >
              Cancel
            </button>

            <button
              type="submit"
              className="
              px-5
              py-3
              bg-blue-600
              text-white
              rounded-xl
              "
            >
              {
                enrollment
                  ? "Update"
                  : "Create"
              }
            </button>

          </div>

        </form>

      </div>

    </div>

  );
}

export default EnrollmentModal;