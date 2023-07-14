import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Product = () => {
  const [modalOne, setMdalOne] = useState("hidden");
  const [cat, setCat] = useState([]);
  const [product, setProduct] = useState([]);
  const [getProductId, setGetProductId] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddproduct = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const category = e.target.category.value;
    const img = e.target.img.files[0];
    const formData = new FormData();
    formData.append("file", img);

    fetch("https://upload.rainbosoft.com", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        const image = data.url;
        const info = { name, price, image, category };
        console.log("Upload successful:", data);
        if (data.url) {
          fetch("https://food-server-zeta.vercel.app/product", {
            method: "POST",
            headers: {
              "content-type": "Application/json",
            },
            body: JSON.stringify(info),
          })
            .then((res) => res.json())
            .then((data) => {
              toast.success("Added Successful");
              e.target.reset();
              setMdalOne("hidden");
            });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // console.log(product);
  const handleDeleteProduct = (id) => {
    fetch(`https://food-server-zeta.vercel.app/delete-product?_id=${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("Your Product Deleted successful");
          console.log(data);
        }
      });
  };

  const getProductIdFunc = (item) => {
    console.log(item._id);
    setGetProductId(item._id);
    setMdalOne("block");
    setSelectedProduct(item);
  };
  // console.log(selectedProduct);
  const UpdateProduct = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const category = e.target.category.value;
    const updateInfo = { name, price, category };
    // console.log({ name, price, category });
    fetch(`https://food-server-zeta.vercel.app/updateProduct/${selectedProduct._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Your Product Update Success fully");
        setGetProductId("");
        e.target.reset();
        setMdalOne("hidden");
        setSelectedProduct(null);
      });
  };

  useEffect(() => {
    fetch("https://food-server-zeta.vercel.app/category")
      .then((res) => res.json())
      .then((data) => setCat(data));
  }, []);

  useEffect(() => {
    fetch("https://food-server-zeta.vercel.app/product")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [handleAddproduct, handleDeleteProduct]);

  return (
    <div>
      <div className="flex justify-end">
        <button
          onClick={() => setMdalOne("block")}
          className="bg-[#ad1d1d] px-5 py-1 rounded-sm text-white"
        >
          Add Product
        </button>
        {/* modal start----------------------------------------*/}
        {getProductId ? (
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
                  onSubmit={UpdateProduct}
                  className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
                >
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex items-start">
                      <div className="text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                        <h3>Update Your Product</h3>
                        {/* <!-- component --> */}

                        <div>
                          <input
                            name="name"
                            type="text"
                            className="p-2 w-full focus:outline-none border rounded mt-5 block"
                            placeholder="Product name ?"
                            defaultValue={selectedProduct.name}
                          />
                          <input
                            name="price"
                            type="number"
                            className="p-2 w-full focus:outline-none border rounded mt-5 block"
                            placeholder="Product Price ?"
                            defaultValue={selectedProduct.price}
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
                              disabled
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
        ) : (
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
                  onSubmit={handleAddproduct}
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
                            defaultValue=""
                          />
                          <input
                            name="price"
                            type="number"
                            className="p-2 w-full focus:outline-none border rounded mt-5 block"
                            placeholder="Product Price ?"
                            defaultValue=""
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
        )}
        {/* modal end----------------------------------------*/}
      </div>

      {/* table  */}

      <table className="w-full mt-10">
        <tr className="font-medium">
          <th>#</th>
          <th>photo</th>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Action</th>
        </tr>

        {product.map((item, i) => {
          return (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>
                <img
                  className="h-12 w-12"
                  src={"https://" + item.image}
                  alt=""
                />
              </td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
              <td>
                <button onClick={() => handleDeleteProduct(item._id)}>
                  Delete
                </button>
                <button onClick={() => getProductIdFunc(item)}>Edit</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Product;
