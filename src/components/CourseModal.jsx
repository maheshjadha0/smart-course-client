import { useState, useEffect } from "react";

import { createCourse, updateCourse } from "../api/courseApi";

function CourseModal({ categories, onClose, onSuccess, course  }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    categoryId: "",
    thumbnailUrl: "",
  });

  useEffect(() => {
    if (course) {
      setFormData({
        title: course.title || "",
        description: course.description || "",
        price: course.price || "",
        categoryId: course.categoryId || "",
        thumbnailUrl: course.thumbnailUrl || "",
      });
    } else {
      setFormData({
        title: "",
        description: "",
        price: "",
        categoryId: "",
        thumbnailUrl: "",
      });
    }
  }, [course]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (course) {
        await updateCourse(course.id, formData);
      } else {
        await createCourse(formData);
      }

      onSuccess();
    } catch (error) {
      console.log(error);
    }
  };

  return (
   <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">

  <div
    className="
      bg-white
      w-full
      max-w-4xl
      rounded-3xl
      shadow-2xl
      overflow-hidden
      max-h-[90vh]
      overflow-y-auto
    "
  >

    {/* Header */}

    <div
      className="
        px-8
        py-6
        border-b
        bg-slate-50
      "
    >
      <h2 className="text-3xl font-bold text-slate-800">
        {course ? "Edit Course" : "Create New Course"}
      </h2>

      <p className="text-slate-500 mt-2">
        Add course information and publish to students
      </p>
    </div>

    {/* Form */}

    <form
      onSubmit={handleSubmit}
      className="p-8 space-y-6"
    >

      {/* Title */}

      <div>
        <label className="block mb-2 font-semibold text-slate-700">
          Course Title
        </label>

        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="React Complete Guide 2026"
          className="
            w-full
            border
            border-slate-300
            rounded-xl
            px-4
            py-3
            focus:ring-2
            focus:ring-purple-500
            outline-none
          "
        />
      </div>

      {/* Description */}

      <div>
        <label className="block mb-2 font-semibold text-slate-700">
          Description
        </label>

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="5"
          placeholder="Write course description..."
          className="
            w-full
            border
            border-slate-300
            rounded-xl
            px-4
            py-3
            focus:ring-2
            focus:ring-purple-500
            outline-none
          "
        />
      </div>

      {/* Price + Category */}

      <div className="grid md:grid-cols-2 gap-5">

        <div>
          <label className="block mb-2 font-semibold text-slate-700">
            Price (₹)
          </label>

          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="999"
            className="
              w-full
              border
              border-slate-300
              rounded-xl
              px-4
              py-3
              focus:ring-2
              focus:ring-purple-500
              outline-none
            "
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold text-slate-700">
            Category
          </label>

          <select
            name="categoryId"
            value={formData.categoryId}
            onChange={handleChange}
            className="
              w-full
              border
              border-slate-300
              rounded-xl
              px-4
              py-3
              focus:ring-2
              focus:ring-purple-500
              outline-none
            "
          >
            <option value="">
              Select Category
            </option>

            {categories.map(category => (
              <option
                key={category.id}
                value={category.id}
              >
                {category.name}
              </option>
            ))}
          </select>
        </div>

      </div>

      {/* Thumbnail */}

      <div>
        <label className="block mb-2 font-semibold text-slate-700">
          Thumbnail URL
        </label>

        <input
          name="thumbnailUrl"
          value={formData.thumbnailUrl}
          onChange={handleChange}
          placeholder="https://..."
          className="
            w-full
            border
            border-slate-300
            rounded-xl
            px-4
            py-3
            focus:ring-2
            focus:ring-purple-500
            outline-none
          "
        />
      </div>

      {/* Preview */}

      {formData.thumbnailUrl && (

        <div
          className="
            border
            rounded-2xl
            p-4
            bg-slate-50
          "
        >
          <p className="font-semibold mb-3">
            Thumbnail Preview
          </p>

          <img
            src={formData.thumbnailUrl}
            alt=""
            className="
              w-full
              md:w-96
              h-56
              object-cover
              rounded-xl
              shadow-md
            "
          />
        </div>

      )}

      {/* Footer Buttons */}

      <div
        className="
          flex
          justify-end
          gap-4
          pt-4
          border-t
        "
      >

        <button
          type="button"
          onClick={onClose}
          className="
            px-6
            py-3
            rounded-xl
            border
            border-slate-300
            hover:bg-slate-100
            font-medium
          "
        >
          Cancel
        </button>

        <button
          type="submit"
          className="
            px-8
            py-3
            rounded-xl
            bg-purple-600
            hover:bg-purple-700
            text-white
            font-semibold
            shadow-lg
          "
        >
          {course ? "Update Course" : "Create Course"}
        </button>

      </div>

    </form>

  </div>

</div>
  );
}

export default CourseModal;
