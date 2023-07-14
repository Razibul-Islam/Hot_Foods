import React, { useEffect, useState } from "react";
import Rate from "@mui/icons-material/StarRate";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { toast } from "react-toastify";

const Menus = () => {
  const [menu, setMenu] = useState([]);
  const [product, setProduct] = useState([]);
  const [modalOne, setMdalOne] = useState("hidden");
  const [addToCart, setAddToCart] = useState({});
  // console.log(addToCart);

  useEffect(() => {
    fetch("https://food-server-zeta.vercel.app/category")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);

  useEffect(() => {
    fetch("https://food-server-zeta.vercel.app/product")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const getCartItemDetails = (item) => {
    setMdalOne("block");
    setAddToCart(item);
  };

  const getCartItem = (e) => {
    e.preventDefault();
    const ItemQuantity = Number(e.target.quantity.value);
    let cartItem = [];

    const storedCart = localStorage.getItem("product");
    if (storedCart) {
      cartItem = JSON.parse(storedCart);
    }

    const existingItem = cartItem.find((item) => item._id === addToCart._id);
    if (existingItem) {
      existingItem.quantity = ItemQuantity;
      addToCart.price = existingItem.quantity * Number(addToCart.Price);
    } else {
      cartItem.push({
        ...addToCart,
        quantity: ItemQuantity,
        price: ItemQuantity * Number(addToCart.price),
      });
    }

    localStorage.setItem("product", JSON.stringify(cartItem));
    e.target.reset();
    setMdalOne("hidden");
    toast.success("Your item has been added successfully");
  };

  return (
    <div className="max-w-7xl mx-auto my-36 marker:">
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
              onSubmit={getCartItem}
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex items-start">
                  <div className="text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                    <h3 className="text-2xl text-center mb-5">Add to Cart</h3>
                    {/* <!-- component --> */}

                    <div>
                      <img
                        src={"https://" + addToCart.image}
                        className="w-[112px] h-[112px] object-contain mx-auto rounded-full"
                        alt="Product"
                      />
                      <input
                        name="name"
                        type="text"
                        className="p-2 w-full focus:outline-none border rounded mt-5 block"
                        defaultValue={addToCart.name}
                        disabled
                      />
                      <input
                        name="price"
                        type="number"
                        className="p-2 w-full focus:outline-none border rounded mt-5 block"
                        defaultValue={addToCart.price}
                        disabled
                      />
                      <input
                        type="number"
                        className="p-2 w-full focus:outline-none border rounded mt-5 block"
                        name="quantity"
                        placeholder="Quantity"
                        defaultValue="1"
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
      <div className="flex justify-center flex-wrap items-center gap-5">
        <button className="bg-[#B40303] px-5 py-1 rounded-2xl text-white  border-white shadow shadow-[#B40303]">
          All
        </button>
        {menu.map((cat, i) => (
          <button
            key={i}
            className="bg-[#B40303] px-5 py-1 rounded-2xl text-white  border-white shadow shadow-[#B40303]"
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 p-5 md:gap-10 gap-5 mt-10">
        {product.map((item, i) => (
          <div
            key={i}
            className="shadow-2xl rounded overflow-hidden relative text-sm"
          >
            <FavoriteBorderIcon className="absolute right-3 text-[#B40303] top-3" />
            <img
              className="w-60 mx-auto md:h-40 h-28"
              src={"https://" + item.image}
              alt=""
            />
            <h4 className="text-center uppercase my-1">{item.name}</h4>
            <div className="flex justify-center items-center mb-1">
              <Rate className="text-orange-500" />
              <Rate className="text-orange-500" />
              <Rate className="text-orange-500" />
              <Rate />
              <Rate />
            </div>
            <h4 className="text-xl text-center text-[#B40303]">
              ৳ {item.price}
            </h4>
            <button
              className="w-full py-1 bg-[#B40303] mt-2 uppercase text-white"
              onClick={() => getCartItemDetails(item)}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menus;
