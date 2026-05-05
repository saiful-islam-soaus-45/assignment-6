const Pricing = () => {
    return (
        <section className="bg-white py-16 px-4">
            <div className="max-w-6xl mx-auto mt-30">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-slate-500 text-lg">
                        Choose the plan that fits your needs. Upgrade or downgrade anytime.
                    </p>
                    <div className="w-8 h-1 bg-pink-400 mx-auto mt-6 rounded-full"></div>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    
                    {/* Starter Plan */}
                    <div className="bg-white border border-gray-100 rounded-3xl p-10 shadow-sm flex flex-col h-full">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Starter</h3>
                        <p className="text-slate-500 mb-8 text-sm">Perfect for getting started</p>
                        
                        <div className="mb-8">
                            <span className="text-5xl font-bold text-slate-900">$0</span>
                            <span className="text-slate-500">/Month</span>
                        </div>

                        <ul className="space-y-4 mb-10 grow text-sm text-slate-600">
                            <li className="flex items-center gap-3">
                                <span className="text-green-500 font-bold">✓</span> Access to 10 free tools
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-green-500 font-bold">✓</span> Basic templates
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-green-500 font-bold">✓</span> Community support
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-green-500 font-bold">✓</span> 1 project per month
                            </li>
                        </ul>

                        <button className="w-full btn py-4 px-6 bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold rounded-2xl hover:bg-[#6d28d9] transition-colors">
                            Get Started Free
                        </button>
                    </div>

                    {/* Pro Plan (Highlighted) */}
                    <div className="relative bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-3xl p-10 shadow-xl transform md:scale-105 z-10 flex flex-col h-full">
                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-orange-100 text-orange-600 text-xs font-bold py-1.5 px-4 rounded-full border border-orange-200">
                            Most Popular
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-2">Pro</h3>
                        <p className="opacity-80 mb-8 text-sm">Best for professionals</p>
                        
                        <div className="mb-8">
                            <span className="text-5xl font-bold">$29</span>
                            <span className="opacity-80">/Month</span>
                        </div>

                        <ul className="space-y-4 mb-10 grow text-sm opacity-90">
                            <li className="flex items-center gap-3 font-bold"><span>✓</span> Access to all premium tools</li>
                            <li className="flex items-center gap-3 font-bold"><span>✓</span> Unlimited templates</li>
                            <li className="flex items-center gap-3 font-bold"><span>✓</span> Priority support</li>
                            <li className="flex items-center gap-3 font-bold"><span>✓</span> Unlimited projects</li>
                            <li className="flex items-center gap-3 font-bold"><span>✓</span> Cloud sync</li>
                            <li className="flex items-center gap-3 font-bold"><span>✓</span> Advanced analytics</li>
                        </ul>

                        <button className="w-full btn py-4 px-6 bg-white text-[#7c3aed] font-bold rounded-2xl hover:bg-gray-100 transition-colors">
                            Start Pro Trial
                        </button>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="bg-white border border-gray-100 rounded-3xl p-10 shadow-sm flex flex-col h-full">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Enterprise</h3>
                        <p className="text-slate-500 mb-8 text-sm">For teams and businesses</p>
                        
                        <div className="mb-8">
                            <span className="text-5xl font-bold text-slate-900">$99</span>
                            <span className="text-slate-500">/Month</span>
                        </div>

                        <ul className="space-y-4 mb-10 grow text-sm text-slate-600">
                            <li className="flex items-center gap-3"><span className="text-green-500 font-bold">✓</span> Everything in Pro</li>
                            <li className="flex items-center gap-3"><span className="text-green-500 font-bold">✓</span> Team collaboration</li>
                            <li className="flex items-center gap-3"><span className="text-green-500 font-bold">✓</span> Custom integrations</li>
                            <li className="flex items-center gap-3"><span className="text-green-500 font-bold">✓</span> Dedicated support</li>
                            <li className="flex items-center gap-3"><span className="text-green-500 font-bold">✓</span> SLA guarantee</li>
                            <li className="flex items-center gap-3"><span className="text-green-500 font-bold">✓</span> Custom branding</li>
                        </ul>

                        <button className="w-full btn py-4 px-6 bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold rounded-2xl hover:bg-[#6d28d9] transition-colors">
                            Contact Sales
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Pricing;