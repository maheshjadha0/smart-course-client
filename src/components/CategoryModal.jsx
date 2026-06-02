import { useState } from "react";

function CategoryModal({
    onClose,
    onSave,
    category
}) {

    const [name, setName] = useState(
        category?.name || ""
    );

    const submitHandler = (e) => {

        e.preventDefault();

        onSave({
            name
        });
    };

    return (

        <div
            className="
            fixed
            inset-0
            bg-black/50
            flex
            justify-center
            items-center
            "
        >

            <div
                className="
                bg-white
                p-6
                rounded-xl
                w-full
                max-w-md
                "
            >

                <h2
                    className="
                    text-2xl
                    font-bold
                    mb-5
                    "
                >
                    {
                        category
                            ? "Edit Category"
                            : "Add Category"
                    }
                </h2>

                <form
                    onSubmit={submitHandler}
                >

                    <input
                        type="text"
                        value={name}
                        onChange={(e) =>
                            setName(
                                e.target.value
                            )
                        }
                        placeholder="Category Name"
                        className="
                        w-full
                        border
                        p-3
                        rounded-lg
                        mb-4
                        "
                    />

                    <div
                        className="
                        flex
                        justify-end
                        gap-3
                        "
                    >

                        <button
                            type="button"
                            onClick={onClose}
                            className="
                            px-4
                            py-2
                            border
                            rounded-lg
                            "
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="
                            px-4
                            py-2
                            bg-blue-600
                            text-white
                            rounded-lg
                            "
                        >
                            Save
                        </button>

                    </div>

                </form>

            </div>

        </div>

    );
}

export default CategoryModal;