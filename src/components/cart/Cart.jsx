import { CiShoppingCart } from "react-icons/ci";
import { toast } from "react-toastify";


const Cart = ({ carts, setCarts }) => {
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)
    const handlePayment = () => {

        setCarts([])
        toast("Payment Successful")
    }
    const handleDelete = (item) => {
        const filteredArray = carts.filter(c => c.id !== item.id)
        setCarts(filteredArray)
        toast.error("Item removed from cart");

    }
    return (
        <div className="p-10 border border-gray-400 max-w-5xl mx-auto rounded-2xl m-10 bg-amber-50">
            <h1 className="font-bold text-2xl">Your Cart</h1>
            {
                carts.length === 0 ? <div className="flex flex-col items-center justify-center py-10">
                    {/* Empty card design */}
                    <CiShoppingCart size={60} className="text-gray-400 mb-4" />
                    <p className="text-center text-gray-500 font-medium">Your Cart is empty</p>
                </div> : <>
                    <div>
                        {
                            carts.map(item => <div key={item.id}>

                                <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl mb-4">


                                    <div className="flex items-center gap-4">
                                        <img src={item.img} alt="" className="w-10 h-10 " />
                                        <div>
                                            <h3 className="font-bold">{item.name}</h3>
                                            <p className="text-gray-500 text-sm">${item.price}</p>
                                        </div>
                                    </div>


                                    <button onClick={() => handleDelete(item)}
                                        className="text-pink-500 font-semibold cursor-pointer"

                                    >
                                        Remove
                                    </button>

                                </div>


                            </div>)

                        }
                    </div>
                    <div className="flex justify-between font-semibold mt-5">
                        <div>
                            Total:
                        </div>
                        <div>
                            ${totalPrice}
                        </div>
                    </div>

                    <div>
                        <button onClick={handlePayment} className="btn w-full mt-5 rounded-3xl text-white bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 ">Proceed to Checkout</button>
                    </div>
                </>
            }




        </div>
    );
};

export default Cart;