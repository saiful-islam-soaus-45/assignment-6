// import React from 'react';

import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
    return (
        <>
            <div className="container mx-auto mt-2 sticky top-0 z-50 bg-white shadow-md">
                <div className="flex justify-around gap-2 items-center py-4 ">
                    
                    <h2 className="text-3xl font-bold bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600  bg-clip-text text-transparent pb-1">
                        DigiTools
                    </h2>
                    <ul className="hidden md:flex lg:flex gap-5 items-center cursor-pointer">
                        <li>Products</li>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Testimonials</li>
                        <li>FAQ</li>
                    </ul>

                    <div className="flex gap-4 items-center">
                        <p className="flex items-center gap-3"><MdOutlineShoppingCart /><span className="cursor-pointer">Loggin</span></p>
                        <div className="">
                            <button className="btn text-white bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl">Get Started</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
