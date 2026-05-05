import stepimg from "../../assets/stepcard/user.png"
import secndimg from "../../assets/stepcard/package.png"
import thirdimg from "../../assets/stepcard/rocket.png"
const StepCard = () => {
    return (
        <>

        <div>
          <div className="py-7 mt-6">
            <p className="font-bold text-4xl text-center text-gray-800">Get Started In 3 Steps</p>
            <p className="text-gray-500 mt-6 text-center">Start using premium digital tools in minutes, not hours.</p>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-8">
            
            {/* Step 01 */}
            <div className="relative  bg-white p-10 rounded-3xl border border-gray-100 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="absolute top-5 right-15 bg-violet-600 text-white text-[10px] font-bold w-7 h-7 flex items-center justify-center rounded-full">
                    01
                </div>
                <div className="w-24 h-24 bg-violet-50 rounded-full flex items-center justify-center mb-8">
                    <img src={stepimg} alt="User" className="w-12 h-12 object-contain" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Create Account</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                    Sign up for free in seconds. No credit card required to get started.
                </p>
            </div>

            {/* Step 02 */}
            <div className="relative bg-white p-10 rounded-3xl border border-gray-100 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="absolute top-5 right-15 bg-violet-600 text-white text-[10px] font-bold w-7 h-7 flex items-center justify-center rounded-full">
                    02
                </div>
                <div className="w-24 h-24 bg-violet-50 rounded-full flex items-center justify-center mb-8">
                    <img src={secndimg} alt="Package" className="w-12 h-12 object-contain" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Choose Products</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                    Browse our catalog and select the tools <br /> that fit your needs.
                </p>
            </div>

            {/* Step 03 */}
            <div className="relative bg-white p-10 rounded-3xl border border-gray-100 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="absolute top-5 right-15 bg-violet-600 text-white text-[10px] font-bold w-7 h-7 flex items-center justify-center rounded-full">
                    03
                </div>
                <div className="w-24 h-24 bg-violet-50 rounded-full flex items-center justify-center mb-8">
                    <img src={thirdimg} alt="Rocket" className="w-12 h-12 object-contain" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Start Creating</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                    Download and start using your premium <br /> tools immediately.
                </p>
            </div>
        </div>
        </div>
        
        </>
    );
};

export default StepCard;