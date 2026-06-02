import {
  useEffect,
  useState
} from "react";

import AdminLayout from "../../layouts/AdminLayout";

import LessonModal from "../../components/LessonModal";

import {
  getLessons,
  deleteLesson
} from "../../api/lessonApi";

import {
  getCourses
} from "../../api/courseApi";

export default function Lessons() {

  const [lessons, setLessons] =
    useState([]);

  const [courses, setCourses] =
    useState([]);

  const [showModal, setShowModal] =
    useState(false);

  const [selectedLesson,
    setSelectedLesson] =
    useState(null);

  const loadLessons =
    async () => {

      try {

        const data =
          await getLessons();

        setLessons(data);

      }
      catch (error) {

        console.log(error);

      }

    };

  const loadCourses =
    async () => {

      try {

        const data =
          await getCourses();

        setCourses(data);

      }
      catch (error) {

        console.log(error);

      }

    };

  useEffect(() => {

    loadLessons();

    loadCourses();

  }, []);

  const editLesson =
    (lesson) => {

      setSelectedLesson(
        lesson
      );

      setShowModal(true);

    };

  const removeLesson =
    async (id) => {

      if (
        !window.confirm(
          "Delete lesson?"
        )
      )
        return;

      await deleteLesson(id);

      loadLessons();

    };

  return (

    <AdminLayout>

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-3xl font-bold">
            Lessons
          </h1>

          <p className="text-slate-500">
            Manage lessons
          </p>

        </div>

        <button
          onClick={() => {

            setSelectedLesson(
              null
            );

            setShowModal(true);

          }}
          className="
          px-6
          py-3
          bg-blue-600
          text-white
          rounded-xl
          "
        >
          + Add Lesson
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
                Title
              </th>

              <th className="p-4 text-left">
                Course
              </th>

              <th className="p-4 text-left">
                Video
              </th>

              <th className="p-4 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {
              lessons.map(
                lesson => (

                  <tr
                    key={lesson.id}
                    className="border-t"
                  >

                    <td className="p-4">
                      {lesson.id}
                    </td>

                    <td className="p-4">
                      {lesson.title}
                    </td>

                    <td className="p-4">
                     {
                        courses.find(
                          (e) => e.id === lesson.courseId
                        )?.title
                      }
                    </td>

                    <td className="p-4">

                      <a
                        href={
                          lesson.videoUrl
                        }
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600"
                      >
                        Open Video
                      </a>

                    </td>

                    <td className="p-4 text-center">

                      <button
                        onClick={() =>
                          editLesson(
                            lesson
                          )
                        }
                        className="
                        bg-yellow-500
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
                          removeLesson(
                            lesson.id
                          )
                        }
                        className="
                        bg-red-600
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
              )
            }

          </tbody>

        </table>

      </div>

      {
        showModal && (

          <LessonModal

            lesson={
              selectedLesson
            }

            courses={
              courses
            }

            onClose={() => {

              setShowModal(false);

              setSelectedLesson(
                null
              );

            }}

            onSuccess={() => {

              loadLessons();

              setShowModal(false);

              setSelectedLesson(
                null
              );

            }}

          />

        )
      }

    </AdminLayout>

  );
}

