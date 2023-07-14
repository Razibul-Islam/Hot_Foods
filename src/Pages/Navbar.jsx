import React, { useState } from "react";
import logo from "../assets/img/logo.png";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [open, SetOpen] = useState(false);
  const location = useLocation();

  // Check if the pathname is equal to '/admib'
  if (
    location.pathname === "/admin" ||
    location.pathname === "/admin/category" ||
    location.pathname === "/admin/product"
  ) {
    return null;
  }

  return (
    <div id="nav" className="bg-gradient-to-tr from-[#AD0303] to-[#7E0202] p-5">
      <div className="flex justify-between items-center">
        <img src={logo} alt="" />
        <div className="flex gap-5 hidden md:block items-center">
          <Link className="text-white mx-3" to="/">
            Home
          </Link>
          <Link className="text-white mx-3" to="/about">
            About
          </Link>
          <Link className="text-white mx-3" to="/contact">
            Contact
          </Link>
          <Link className="text-white mx-3" to="/gallery">
            Gallery
          </Link>
          <Link className="text-white mx-3" to="/cart">
            Cart
          </Link>
        </div>
        <button className="bg-white px-5 py-2 rounded-sm ring-offset-slate-400 hidden md:block  text-[#B40303] shadow-xl">
          Download App
        </button>
        <button className="block md:hidden" onClick={() => SetOpen(!open)}>
          <MenuIcon className="text-white" />
        </button>
      </div>
      <div className={`${open ? "block" : "hidden"} ease-in duration-700`}>
        <Link className="text-white my-3 px-2 block" to="/">
          Home
        </Link>
        <Link className="text-white my-3 px-2 block" to="/about">
          About
        </Link>
        <Link className="text-white my-3 px-2 block" to="/contact">
          Contact
        </Link>
        <Link className="text-white my-3 px-2 block" to="/gallery">
          Gallery
        </Link>
        <Link className="text-white my-3 px-2 block" to="/cart">
          Cart
        </Link>
      </div>
    </div>
  );
};

export default Navbar;