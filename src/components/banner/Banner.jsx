// import React from "react";
import { CiPlay1 } from "react-icons/ci";
import banner from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="mt-20">
      <div className="container mx-auto flex justify-around ">

        <div className=" mt-10">
          <span className="bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm">
            🔵 New: AI-Powered Tools Available
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-5 text-gray-800 leading-tight">
            Supercharge Your <br /> Digital Workflow
          </h1>

          <p className="text-gray-500 mt-5">
            Access premium AI tools, design assets, templates, and productivity <br />
            software—all in one place. Start creating faster today.
          </p>

          <p className="text-gray-500 mt-2 underline">
            Explore Products
          </p>

          
          <div className="flex gap-4 mt-6">
            <button className="btn btn-outline btn-primary text-white bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl w-40 h-11">Explore Product</button>

            <button className="btn btn-outline btn-primary rounded-3xl w-40"> <CiPlay1/> Watch Demo</button>

          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div className="bg-white p-4 rounded-2xl shadow-md">
            <img
              src={banner}
              alt="banner"
              className="w-100 rounded-xl"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;