import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import Footer from "./Home/Footer";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-toastify";

const Cart = () => {
  const [modalOne, setMdalOne] = useState("hidden");
  // const form = useRef();
  // const getCartItems = () => {
  //   const storedCart = localStorage.getItem("product");
  //   if (storedCart) {
  //     return JSON.parse(storedCart);
  //   }
  //   return [];
  // };

  // const cartItems = getCartItems();

  // const clearLocalStorage = () => {
  //   localStorage.removeItem("product");
  // };

  // const removeFromDb = (itemId) => {
  //   const storedCart = localStorage.getItem("product");
  //   if (storedCart) {
  //     const cartItems = JSON.parse(storedCart);
  //     const updatedCartItems = cartItems.filter((item) => item._id !== itemId);
  //     localStorage.setItem("product", JSON.stringify(updatedCartItems));
  //   }
  // };

  // const orderData = (e) => {
  //   e.preventDefault();
  //   const form = e.target; // Reference to the form element
  //   const CustomerName = form.name.value;
  //   const CustomerPhone = form.phoneNumber.value;
  //   const CustomerEmail = form.email.value;
  //   const CustomerAddress = form.address.value;
  //   const CustomerFullAddress = form.fullAddress.value;
  //   const CustomerNote = form.note.value;
  //   const CustomerInfo = {
  //     CustomerName,
  //     CustomerPhone,
  //     CustomerEmail,
  //     CustomerAddress,
  //     CustomerFullAddress,
  //     CustomerNote,
  //     cartItems,
  //   };

  //   fetch("https://food-server-zeta.vercel.app/getOrders", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "Application/json",
  //     },
  //     body: JSON.stringify(CustomerInfo),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       toast.success("CheckOut Successful");
  //       form.reset();
  //       setMdalOne("hidden");
  //       handleCheckout(CustomerInfo);
  //       clearLocalStorage();
  //     });
  // };

  // const handleCheckout = () => {

  //   emailjs
  //     .send("service_7lhi3h6", "template_7fethcj", "1maGvis05z601l6ak")
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  const form = useRef();

  const getCartItems = () => {
    const storedCart = localStorage.getItem("product");
    if (storedCart) {
      return JSON.parse(storedCart);
    }
    return [];
  };

  const cartItems = getCartItems();

  const clearLocalStorage = () => {
    localStorage.removeItem("product");
  };

  const removeFromDb = (itemId) => {
    const storedCart = localStorage.getItem("product");
    if (storedCart) {
      const cartItems = JSON.parse(storedCart);
      const updatedCartItems = cartItems.filter((item) => item._id !== itemId);
      localStorage.setItem("product", JSON.stringify(updatedCartItems));
    }
  };

  const orderData = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const CustomerName = formData.get("name");
    const CustomerPhone = formData.get("phoneNumber");
    const CustomerEmail = formData.get("email");
    const CustomerAddress = formData.get("address");
    const CustomerFullAddress = formData.get("fullAddress");
    const CustomerNote = formData.get("note");
    const CustomerInfo = {
      CustomerName,
      CustomerPhone,
      CustomerEmail,
      CustomerAddress,
      CustomerFullAddress,
      CustomerNote,
      cartItems,
    };

    fetch("https://food-server-zeta.vercel.app/getOrders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(CustomerInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("CheckOut Successful");
        form.current.reset();
        setMdalOne("hidden");
        handleCheckout(CustomerInfo);
        clearLocalStorage();
      });
  };

  const handleCheckout = (formData) => {
    const templateParams = {
      CustomerName: formData.CustomerName,
      CustomerPhone: formData.CustomerPhone,
      CustomerEmail: formData.CustomerEmail,
      CustomerAddress: formData.CustomerAddress,
      CustomerFullAddress: formData.CustomerFullAddress,
      CustomerNote: formData.CustomerNote,
      cartItems: formData.cartItems,
    };

    emailjs
      .send(
        "service_7lhi3h6",
        "template_7fethcj",
        templateParams,
        "1maGvis05z601l6ak"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log(templateParams);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
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
              onSubmit={orderData}
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
              ref={form}
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex items-start">
                  <div className="text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                    <h3 className="text-2xl text-center mb-5">CheckOut</h3>
                    {/* <!-- component --> */}

                    <div>
                      <label htmlFor="name" className="text-lg">
                        Name:
                      </label>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="p-2 w-full focus:outline-none border rounded mt-1 block"
                        placeholder="Your Name"
                      />
                      <label
                        htmlFor="phone Number"
                        className="text-lg mt-5 block"
                      >
                        Phone Number:
                      </label>
                      <input
                        name="phoneNumber"
                        id="phone Number"
                        type="number"
                        className="p-2 w-full focus:outline-none border rounded mt-1 block"
                        placeholder="Your Phone Number"
                      />
                      <label htmlFor="email" className="text-lg mt-5 block">
                        Email:
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="p-2 w-full focus:outline-none border rounded mt-1 block"
                        name="email"
                        placeholder="Your Email Address"
                      />
                      <label htmlFor="address" className="text-lg mt-5 block">
                        Address:
                      </label>
                      <input
                        type="text"
                        id="address"
                        className="p-2 w-full focus:outline-none border rounded mt-1 block"
                        name="address"
                        placeholder="Your Address"
                      />
                      <label
                        htmlFor="fullAddress"
                        className="text-lg mt-5 block"
                      >
                        Full Address:
                      </label>
                      <input
                        type="text"
                        id="fullAddress"
                        className="p-2 w-full focus:outline-none border rounded mt-1 block"
                        name="fullAddress"
                        placeholder="Your Full Address"
                      />
                      <label htmlFor="note" className="text-lg mt-5 block">
                        Leave a Note:
                      </label>
                      <textarea
                        name="note"
                        id="note"
                        className="p-2 w-full focus:outline-none border rounded mt-1 block"
                        placeholder="Note"
                      ></textarea>
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
      <div className="md:h-96 h-24 about-banner flex justify-center items-center">
        <div className="flex  justify-center items-center gap-5 text-white">
          <Link to="/">Home</Link>
          <p>|</p>
          <Link to="/cart">Cart</Link>
        </div>
      </div>

      {/* Title */}
      <div>
        <h1 className="text-3xl font-medium text-center mt-7">CheckOut Now</h1>
        <h2 className="text-2xl font-medium text-center mt-3">
          Cash On Delivery Only
        </h2>
      </div>
      {/* data  */}

      <div className="max-w-4xl mx-auto my-16">
        {cartItems.map((cartItem, i) => (
          <div
            key={i}
            className="w-full bg-white shadow flex justify-between items-center my-3"
          >
            <img
              className="w-24 h-24 bg-[#911c1cec]"
              src={`https://${cartItem.image}`}
              alt=""
            />
            <p>Name : {cartItem.name}</p>
            <p className="px-5">Quantity: {cartItem.quantity} </p>
            <p className="px-5">{cartItem.price} $</p>
            <p
              className="p-3 mr-2 bg-red-500/80 rounded-full text-white cursor-pointer"
              onClick={() => removeFromDb(cartItem._id)}
            >
              <DeleteIcon />
            </p>
          </div>
        ))}

        <div className="my-10 flex justify-end gap-5">
          <button
            className="bg-[#a11d1d] px-5 py-1 rounded text-white"
            onClick={() => clearLocalStorage()}
          >
            Clear
          </button>
          <button
            onClick={() => setMdalOne("block")}
            className="bg-[#a11d1d] px-5 py-1 rounded text-white"
          >
            CheckOut
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Cart;
