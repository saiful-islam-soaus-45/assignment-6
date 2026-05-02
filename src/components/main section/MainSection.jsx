// import React from 'react';

import { useState } from "react";

const MainSection = () => {
    const [selectedType, setSelectedType] = useState("available");
    return (
        <div>
            <div className="flex flex-col gap-4 items-center mt-30 mb-20">
                <p className="text-3xl font-bold">Premium Digital Tools</p>
                <p className="text-center text-gray-500">Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.
                </p>
                <div className="flex ">
                    <button onClick={() => setSelectedType("available")} className={`btn ${selectedType === "available" ? "bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 text-white" : "" } text-blue  rounded-3xl w-40`}>Products</button>

                    <button onClick={() => setSelectedType("selected")} className={`btn ${selectedType === "selected" ? "bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 text-white" : ""} text-blue rounded-3xl w-30`}>Cart</button>
                </div>
            </div>
        </div>
    );
};

export default MainSection;