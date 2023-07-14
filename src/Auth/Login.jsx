import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-bg h-[100vh] flex items-center">
      <div className="p-5 w-96 mx-auto pt-10 shadow-lg card-login">
        <div className="flex justify-center gap-5 items-center">
          <img
            className="w-10"
            src="https://www.shareicon.net/data/256x256/2016/08/18/808800_food_512x512.png"
            alt=""
          />
          <h1 className="text-xl">Login</h1>
        </div>
        <div>
          <input
            type="text"
            className="p-2 w-full focus:outline-none border rounded mt-5 block"
            placeholder="Category name ?"
          />
          <input
            type="number"
            className="p-2 w-full focus:outline-none border rounded mt-5 block"
            placeholder="Category Order ?"
          />
        </div>
        <div className="my-5 flex justify-between items-center">
          <button className="bg-[#bd1515] px-5 py-2 text-white rounded-sm">
            Login
          </button>
          <Link>Forgotten Password ?</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
