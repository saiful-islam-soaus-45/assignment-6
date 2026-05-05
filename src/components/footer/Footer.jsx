const Footer = () => {
    return (
        <footer className="bg-[#0b1121] mt-10 text-gray-400 py-10 px-6 md:mt-40 lg:mt-40 font-sans">
            <div className="max-w-7xl mx-auto relative mt-10">
                
                
                <div className="flex flex-col lg:grid lg:grid-cols-5 gap-10 mb-10 text-center md:text-left">
                    
                    {/* DigiTools Section */}
                    <div className="flex flex-col items-center lg:items-start space-y-6">
                        <h2 className="text-white text-3xl md:text-4xl font-bold">DigiTools</h2>
                        <p className="max-w-xs leading-relaxed text-sm md:text-base hidden md:block">
                            Premium digital tools for creators, professionals, and businesses. 
                            Work smarter with our suite of powerful tools.
                        </p>
                    </div>

                    {/* Links Container */}
                    <div className="flex flex-wrap justify-center lg:contents gap-8 md:gap-16 lg:col-span-3">
                        {/* Product */}
                        <div className="min-w-25 md:ml-10">
                            <h4 className="text-white font-semibold mb-4 md:mb-6">Product</h4>
                            <ul className="space-y-3 text-sm">
                                <li className="hover:text-white cursor-pointer transition-colors">Features</li>
                                <li className="hover:text-white cursor-pointer transition-colors">Pricing</li>
                                <li className="hover:text-white cursor-pointer transition-colors">Templates</li>
                                <li className="hover:text-white cursor-pointer transition-colors">Integrations</li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div className="min-w-25">
                            <h4 className="text-white font-semibold mb-4 md:mb-6">Company</h4>
                            <ul className="space-y-3 text-sm">
                                <li className="hover:text-white cursor-pointer transition-colors">About</li>
                                <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
                                <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
                                <li className="hover:text-white cursor-pointer transition-colors">Press</li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div className="min-w-25">
                            <h4 className="text-white font-semibold mb-4 md:mb-6">Resources</h4>
                            <ul className="space-y-3 text-sm">
                                <li className="hover:text-white cursor-pointer transition-colors">Documentation</li>
                                <li className="hover:text-white cursor-pointer transition-colors">Help Center</li>
                                <li className="hover:text-white cursor-pointer transition-colors">Community</li>
                                <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
                            </ul>
                        </div>
                    </div>
                     {/* Social Links Section */}
                <div className="flex flex-col items-center mb-6]">
                    <h4 className="text-white font-semibold mb-4 text-sm">Social Links</h4>
                    <div className="flex gap-4">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black cursor-pointer hover:scale-110 transition-transform">
                            <span className="text-xs font-bold italic">ig</span>
                        </div>
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black cursor-pointer hover:scale-110 transition-transform">
                            <span className="text-xs font-bold">f</span>
                        </div>
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black cursor-pointer hover:scale-110 transition-transform">
                            <span className="text-xs font-bold font-serif">X</span>
                        </div>
                    </div>
                </div>
                </div>

               

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-[12px] md:text-sm space-y-6 md:space-y-0">
                    <p>© 2026 Digitools. All rights reserved.</p>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        <span className="hover:text-white cursor-pointer">Privacy Policy</span>
                        <span className="hover:text-white cursor-pointer">Terms of Service</span>
                        <span className="hover:text-white cursor-pointer">Cookies</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;