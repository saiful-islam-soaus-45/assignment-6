import { useState } from "react";
import { MdOutlineShoppingCart, MdMenu, MdClose } from "react-icons/md";

const Navbar = ({ carts }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-md">
            <div className="w-full md:max-w-7xl lg:max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    
                  
                    <h2 className="text-2xl md:text-3xl font-bold bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        DigiTools
                    </h2>

                    
                    <ul className="hidden lg:flex gap-8 items-center cursor-pointer font-medium text-gray-700">
                        <li className="hover:text-blue-600 transition">Products</li>
                        <li className="hover:text-blue-600 transition">Features</li>
                        <li className="hover:text-blue-600 transition">Pricing</li>
                        <li className="hover:text-blue-600 transition">Testimonials</li>
                        <li className="hover:text-blue-600 transition">FAQ</li>
                    </ul>

                
                    <div className="flex gap-4 items-center">
                      
                        <div className="relative cursor-pointer">
                            <MdOutlineShoppingCart size={28} />
                            {carts.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                                    {carts.length}
                                </span>
                            )}
                        </div>

                      
                        <span className="hidden md:block cursor-pointer font-medium">Login</span>

                        <button className="hidden sm:block btn text-white bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl px-6 py-2 text-sm">
                            Get Started
                        </button>

                        
                        <div className="lg:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
                        </div>
                    </div>
                </div>

                
                {isOpen && (
                    <div className="lg:hidden pb-6 transition-all duration-300">
                        <ul className="flex flex-col gap-4 items-center font-medium text-gray-700">
                            <li className="hover:text-blue-600 w-full text-center py-2 border-b border-gray-100">Products</li>
                            <li className="hover:text-blue-600 w-full text-center py-2 border-b border-gray-100">Features</li>
                            <li className="hover:text-blue-600 w-full text-center py-2 border-b border-gray-100">Pricing</li>
                            <li className="hover:text-blue-600 w-full text-center py-2 border-b border-gray-100">Testimonials</li>
                            <li className="hover:text-blue-600 w-full text-center py-2 border-b border-gray-100">FAQ</li>
                            <li className="md:hidden hover:text-blue-600 py-2">Login</li>
                            <button className="sm:hidden w-full btn text-white bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl py-2">
                                Get Started
                            </button>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;