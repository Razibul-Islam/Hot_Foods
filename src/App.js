import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";
import Cart from "./Pages/Cart";
import NotFound from "./Pages/NotFound";
import Dashboard from "./Admin/Dashboard";
import Category from "./Admin/Category";
import Product from "./Admin/Product";
import Login from "./Auth/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="w-full">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/gallery" element={<Gallery></Gallery>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/admin" element={<Dashboard></Dashboard>}>
          <Route path="/admin/category" element={<Category />}></Route>
          <Route path="/admin/product" element={<Product />}></Route>
        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;
