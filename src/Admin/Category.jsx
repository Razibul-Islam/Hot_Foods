import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Category = () => {
  const [modalOne, setModalOne] = useState("hidden");
  const [category, SetCategory] = useState([]);

  const handleAddCategory = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const order = e.target.order.value;
    const data = { name, order };

    fetch("https://food-server-zeta.vercel.app/category", {
      method: "POST",
      headers: {
        "content-type": "Application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("Category Added successful");
          setModalOne("hidden");
          e.target.reset();
        }
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (_id) => {
    fetch(`https://food-server-zeta.vercel.app/delete-category?_id=${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("Deleted successful");
          console.log(data);
        }
      });
  };

  useEffect(() => {
    fetch("https://food-server-zeta.vercel.app/category")
      .then((res) => res.json())
      .then((data) => SetCategory(data));
  }, [handleDelete, handleAddCategory]);

  let index = 1;

  return (
    <div>
      <div className="flex justify-end">
        <button
          onClick={() => setModalOne("block")}
          className="bg-[#ad1d1d] px-5 py-1 rounded-sm text-white"
        >
          Add Category
        </button>
        {/* modal start----------------------------------------*/}
        <div
          className={`relative z-10 ${modalOne}`}
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <form
                onSubmit={handleAddCategory}
                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
              >
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex items-start">
                    <div className="text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                      <h3>Create a new Category</h3>
                      <div>
                        <input
                          name="name"
                          required
                          type="text"
                          className="p-2 w-full focus:outline-none border rounded mt-5 block"
                          placeholder="Category name ?"
                        />
                        <input
                          name="order"
                          required
                          type="number"
                          className="p-2 w-full focus:outline-none border rounded mt-5 block"
                          placeholder="Category Order ?"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex w-full justify-center rounded-sm bg-[#ad1d1d] px-3 py-2 text-sm uppercase text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                  >
                    Submit
                  </button>
                  <button
                    onClick={() => setModalOne("hidden")}
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* modal end----------------------------------------*/}
      </div>

      {/* table  */}

      <table className="w-full mt-10">
        <tr className="font-medium">
          <th>#</th>
          <th>Category Name</th>
          <th>Category Order</th>
          <th>Action</th>
        </tr>

        {category.map((cat, i) => (
          <tr key={i}>
            <td>{index++}</td>
            <td>{cat.name}</td>
            <td>{cat.order}</td>
            <td>
              <button
                onClick={() => handleDelete(cat._id)}
                className="bg-[#811212] px-3 py-1 text-white rounded-sm"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Category;
