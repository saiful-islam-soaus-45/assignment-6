import { useState } from "react";

const ProductCard = ({product, carts, setCarts}) => {
    const [isSubscribed, setIsSubscribed] = useState(false);
    const handleSubsCription =() => {
        console.log("hello");
            setIsSubscribed(true)
            
            setCarts([...carts, product])
            
    }
    return (
        <div className="card w-96 bg-base-100 border border-gray-300 rounded-2xl shadow-md 
                            transition-all duration-300 
                            hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.01]">
                            <div className="card-body">
                                <div className="mb-3">
                                    <img src={product.img} alt="" />
                                </div>
                                <span className="badge badge-xs badge-warning">{product.tag}</span>
                                <div className="flex justify-between">
                                    <h2 className="text-3xl font-bold">{product.name}</h2>

                                </div>
                                <div>
                                    <p>{product.description}</p>
                                </div>
                                <div className="flex gap-2 font-bold">
                                    <span className="text-xl">{product.price}</span>
                                    <span className="text-xl">{product.period}</span>
                                </div>
                                <ul className="mt-6 flex flex-col gap-2 text-xs">
                                    {
                                        product.features.map((feature, index) => (
                                            <li key={index}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="size-4 me-2 inline-block text-success"
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
                                        ))
                                    }
                                </ul>
                                <div className="mt-6">

                                    <div className="mt-6">
                                        <button onClick={handleSubsCription} className="btn btn-primary btn-block">{isSubscribed ? "Added to Cart" : "Buy Now"}</button>
                                    </div>


                                </div>
                            </div>
                        </div>
    );
};

export default ProductCard;