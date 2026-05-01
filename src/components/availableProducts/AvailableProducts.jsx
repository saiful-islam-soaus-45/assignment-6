// import React from 'react';

const AvailableProducts = ({ products }) => {
    // console.log(products);
    return (
        <div className=" w-9/12 mx-auto ">

           <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10">
             {
                products.map((product) => {
                    // console.log(products);
                    return <div className="  card w-90  ">
                        <div className=" card-body border border-gray-200 rounded-2xl  bg-base-100 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl ">
                            <img className="w-10 my-4" src={product.img} alt="" />
                            <div className="flex justify-between">
                                <span className="badge badge-xs badge-warning ">{product.tag}</span>
                                <span className="badge badge-xs badge-warning ">{product.tagType}</span>

                            </div>
                            <div className="flex justify-between">
                                <h2 className="text-3xl font-bold">{product.name}</h2>
                                <span className="text-xl">{product.price}</span>
                            </div>
                            <div>
                                <p>{product.description}</p>
                            </div>
                            <div>
                                <p className="text-emerald-400 font-extrabold text-2xl">Period: {product.period}</p>
                            </div>
                            <ul className="mt-4 flex flex-col gap-2 text-sm">
                                {product.features.map((feature, index) => (
                                    <li key={index} className="flex items-center">

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-4 h-4 mr-2 text-success"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>

                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6">
                                <button className="btn btn-primary btn-block rounded-2xl">Buy Now</button>
                            </div>
                        </div>
                    </div>
                })
            }
           </div>


        </div>
    );
};

export default AvailableProducts;