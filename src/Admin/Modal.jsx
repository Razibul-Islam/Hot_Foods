import React, { useState } from "react";

const Modal = () => {
  const [modalOne, setMdalOne] = useState("hidden");
  const [cat, setCat] = useState([]);
  return (
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
            // onSubmit={handleAddproduct}
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex items-start">
                <div className="text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                  <h3>Create a new Product</h3>
                  {/* <!-- component --> */}

                  <div>
                    <input
                      name="name"
                      type="text"
                      className="p-2 w-full focus:outline-none border rounded mt-5 block"
                      placeholder="Product name ?"
                    />
                    <input
                      name="price"
                      type="number"
                      className="p-2 w-full focus:outline-none border rounded mt-5 block"
                      placeholder="Product Price ?"
                    />
                    <select
                      name="category"
                      className="p-2 w-full focus:outline-none border rounded mt-5 block"
                    >
                      <option value="null">-- select Category --</option>
                      {cat.map((cat,i) => (
                        <option key={i} value={cat.name}>{cat.name}</option>
                      ))}
                    </select>
                    <label className="cursor-pointer" htmlFor="img">
                      <div className="h-20 w-full mt-5 overflow-hidden border flex justify-center items-center bg-[#ad1d1d64] border-red-900 border-dotted">
                        select image
                      </div>
                      <input
                        name="img"
                        type="file"
                        className="hidden"
                        id="img"
                      />
                    </label>
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
                onClick={() => setMdalOne("hidden")}
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
  );
};

export default Modal;
