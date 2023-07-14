import React from "react";
import { Link, Outlet } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsPowerIcon from "@mui/icons-material/SettingsPower";
import CategoryIcon from "@mui/icons-material/Category";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";

const Dashboard = () => {
  return (
    <div>
      <div className="flex bg-[#F1F4F7]">
        <div className="flex hidden md:block w-64 gap-3 items-center p-2">
          <img
            className="h-16"
            src="https://www.shareicon.net/data/256x256/2016/08/18/808800_food_512x512.png"
            alt=""
          />
          <h4 className="text-[#A50303] font-medium text-xl">Hot Foods</h4>
        </div>
        <div className="bg-white w-[1px]"></div>
        <div className="flex  justify-between w-4/5 items-center px-5">
          <Link to="/login" className="text-[#A50303] flex items-center gap-3">
            <HomeIcon /> / <p className="mt-1">Dashboard</p>
          </Link>
          <button className="text-[#A50303]"></button>
        </div>
      </div>
      <hr />
      <div className="flex">
        {/* sidebar  */}
        <div className="w-80 hidden md:block h-[100vh] bg-[#F1F4F7]">
          <Link className="block  py-4  text-[#A50303] hover:text-white hover:bg-[#A50303]">
            <p className="flex justify-between px-5">
              <p className="flex items-center gap-1">
                <DashboardIcon /> Dashboard
              </p>{" "}
              <AddIcon />
            </p>
          </Link>
          <hr />
          <Link
            to="/admin/category"
            className="block  py-4  text-[#A50303] hover:text-white hover:bg-[#A50303]"
          >
            <p className="flex justify-between px-5">
              <p className="flex items-center gap-1">
                <CategoryIcon /> Category
              </p>{" "}
              <AddIcon />
            </p>
          </Link>
          <hr />
          <Link
            to="/admin/product"
            className="block py-4  text-[#A50303] hover:text-white hover:bg-[#A50303]"
          >
            <p className="flex justify-between px-5">
              <p className="flex items-center gap-1">
                <ProductionQuantityLimitsIcon /> Product
              </p>{" "}
              <AddIcon />
            </p>
          </Link>
          <hr />
          <Link className="block py-4  text-[#A50303] group hover:bg-[#A50303]">
            <p className="flex justify-between px-5">
              <p className="text-[#A50303] group-hover:text-white">
                <SettingsPowerIcon /> Log Out
              </p>
            </p>
          </Link>
        </div>

        {/* main */}
        <main className="p-5 w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
