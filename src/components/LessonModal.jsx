import { useEffect, useState } from "react";

import {
  createLesson,
  updateLesson
} from "../api/lessonApi";

function LessonModal({
  lesson,
  courses,
  onClose,
  onSuccess
}) {

  const [formData, setFormData] =
    useState({
      courseId: "",
      title: "",
      videoUrl: "",
    });

  useEffect(() => {

    if (lesson) {

      setFormData({
        courseId: lesson.courseId,
        title: lesson.title,
        videoUrl: lesson.videoUrl,
      });

    }

  }, [lesson]);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      if (lesson) {

        await updateLesson(
          lesson.id,
          formData
        );

      }
      else {

        await createLesson(
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

    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <div className="bg-white w-full max-w-2xl rounded-3xl p-8 shadow-2xl">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-3xl font-bold">
            {lesson
              ? "Edit Lesson"
              : "Create Lesson"}
          </h2>

          <button
            onClick={onClose}
            className="text-2xl"
          >
            ×
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <select
            name="courseId"
            value={formData.courseId}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
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

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Lesson Title"
            className="w-full border rounded-xl p-4"
          />

          <input
            type="text"
            name="videoUrl"
            value={formData.videoUrl}
            onChange={handleChange}
            placeholder="Video URL"
            className="w-full border rounded-xl p-4"
          />

          {formData.videoUrl && (

            <iframe
              src={formData.videoUrl}
              title="preview"
              className="w-full h-72 rounded-xl border"
            />

          )}

          <div className="flex justify-end gap-3">

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
              px-6
              py-3
              bg-blue-600
              text-white
              rounded-xl
              "
            >
              {lesson
                ? "Update"
                : "Create"}
            </button>

          </div>

        </form>

      </div>

    </div>

  );
}

export default LessonModal;