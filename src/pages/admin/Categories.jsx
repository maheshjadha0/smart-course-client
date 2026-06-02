import { useEffect, useState } from "react";

import AdminLayout from "../../layouts/AdminLayout";
import CategoryModal from "../../components/CategoryModal";

import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../../api/categoryApi";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const loadCategories = async () => {
    try {
      const data = await getCategories();
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const openCreateModal = () => {
    setSelectedCategory(null);
    setShowModal(true);
  };

  const openEditModal = (category) => {
    setSelectedCategory(category);
    setShowModal(true);
  };

  const saveCategory = async (data) => {
    try {
      if (selectedCategory) {
        await updateCategory(selectedCategory.id, data);
      } else {
        await createCategory(data);
      }

      setShowModal(false);

      loadCategories();
    } catch (error) {
      console.log(error);
    }
  };

  const removeCategory = async (id) => {
    if (!window.confirm("Delete Category?")) return;

    try {
      await deleteCategory(id);

      loadCategories();
    } catch (error) {
      console.log(error);
    }
  };

 return (
  <AdminLayout>
   {/* Header */}
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">

  <div>
    <h1 className="text-3xl font-bold text-slate-800">
      Categories
    </h1>

    <p className="text-slate-500 mt-1">
      Manage all course categories
    </p>
  </div>

  <button
    onClick={openCreateModal}
    className="
      bg-blue-600
      hover:bg-blue-700
      text-white
      px-8
      py-3
      mr-10
      rounded
      font-medium
      shadow-lg
      hover:shadow-xl
      transition-all
      duration-300
    "
  >
    + Add Category
  </button>

</div>

{/* Table Card */}
<div
  className="
    bg-white
    rounded-2xl
    shadow-lg
    border
    border-slate-200
    overflow-hidden
  "
>

  <div className="overflow-x-auto">

    <table className="w-full">

      <thead className="bg-slate-50 border-b">

        <tr>

          <th
            className="
              px-6
              py-4
              text-left
              text-sm
              font-semibold
              text-slate-600
            "
          >
            ID
          </th>

          <th
            className="
              px-6
              py-4
              text-left
              text-sm
              font-semibold
              text-slate-600
            "
          >
            Category Name
          </th>

          <th
            className="
              px-6
              py-4
              text-center
              text-sm
              font-semibold
              text-slate-600
            "
          >
            Actions
          </th>

        </tr>

      </thead>

      <tbody>

        {categories.map((category) => (

          <tr
            key={category.id}
            className="
              border-b
              hover:bg-slate-50
              transition
            "
          >

            <td
              className="
                px-6
                py-5
                font-medium
                text-slate-700
              "
            >
              #{category.id}
            </td>

            <td
              className="
                px-6
                py-5
              "
            >
              <div className="flex items-center gap-3">

                <div
                  className="
                    w-10
                    h-10
                    rounded-xl
                    bg-blue-100
                    flex
                    items-center
                    justify-center
                  "
                >
                  📁
                </div>

                <span className="font-medium text-slate-800">
                  {category.name}
                </span>

              </div>
            </td>

            <td className="px-6 py-5">

              <div className="flex justify-center gap-3">

                <button
                  onClick={() => openEditModal(category)}
                  className="
                    bg-amber-500
                    hover:bg-amber-600
                    text-white
                    p-5
              
                    rounded
                    font-medium
                    shadow
                    transition
                  "
                >
                  Edit 
                </button>

                <button
                  onClick={() => removeCategory(category.id)}
                  className="
                    bg-red-500
                    hover:bg-red-600
                    text-white
                    px-4
                    py-2.5
                    rounded-xl
                    font-medium
                    shadow
                    transition
                  "
                >
                  Delete
                </button>

              </div>

            </td>

          </tr>

        ))}

      </tbody>

    </table>

  </div>

</div>

{/* Modal */}
{showModal && (
  <CategoryModal
    category={selectedCategory}
    onClose={() => setShowModal(false)}
    onSave={saveCategory}
  />
)}
  </AdminLayout>
);

}

export default Categories;
