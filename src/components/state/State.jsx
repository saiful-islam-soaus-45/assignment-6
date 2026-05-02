const State = () => {
    return (
        <section className="w-full md:w-full bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600  py-20 px-6 mb-10 mt-20">
            <div className="max-w-2xl h-10 mx-auto flex items-center justify-between text-white text-center gap-12">
                 
                
                <div className="flex-1">
                    <h2 className="text-2xl md:text-5xl font-bold tracking-tight">50K+</h2>
                    <p className="text-xl mt-2 opacity-90 font-medium">Active Users</p>
                </div>

                <div className="flex-1  border-y-0 border-x border-white/20 py-8 px-10">
                    <h2 className="text-2xl md:text-5xl font-bold tracking-tight">200+</h2>
                    <p className="text-xl mt-2 opacity-90 font-medium leading-tight">
                        Premium <br /> Tools
                    </p>
                </div>

                
                <div className="flex-1">
                    <h2 className="text-2xl md:text-5xl font-bold tracking-tight">4.9</h2>
                    <p className="text-xl mt-2 opacity-90 font-medium">Rating</p>
                </div>

            </div>
        </section>
    );
};

export default State;