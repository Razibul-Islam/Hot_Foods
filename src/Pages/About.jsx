import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Home/Footer";

const About = () => {
  return (
    <div>
      <div className="md:h-96 h-24 about-banner flex justify-center items-center">
        <div className="flex  justify-center items-center gap-5 text-white">
          <Link to="/">Home</Link>
          <p>|</p>
          <Link to="/about">About</Link>
        </div>
      </div>

      <div className="my-20 max-w-7xl mx-auto md:grid grid-cols-2">
        <img
          className="w-full"
          src="https://d33wubrfki0l68.cloudfront.net/84fb28b777c6f08a72de086306a2d1732ed12eca/3a026/images/uploads/2021_06_21_classic_grilled_cheeseburger_0.jpg"
          alt=""
        />
        <div className="bg-[#A10303] p-10">
          <h1 className="text-3xl text-white font-bold">All About Hot Foods</h1>
          <p className="text-white my-5">
            We have been serving irresistible comfort food since 1999. Our
            mission is to keep you smiling with every bite.
          </p>
          <p className="text-white mb-5">
            We have been serving irresistible comfort food since 1999. Our
            mission is to keep you smiling with every bite. We have been serving
            irresistible comfort food since 1999. Our mission is to keep you
            smiling with every bite.
          </p>

          <button className="bg-white text-[#841010] px-5 py-1 rounded-3xl mt-10">
            Learn More
          </button>
        </div>
      </div>

      <div></div>

      <Footer />
    </div>
  );
};

export default About;
