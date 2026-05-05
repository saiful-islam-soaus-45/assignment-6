

const Cart = ({carts}) => {
    console.log(carts);
    return (
        <div className="p-10 border border-gray-400 max-w-5xl mx-auto rounded-2xl m-10">
            <h1 className="font-bold text-2xl">Your Cart</h1>
            {
                carts.map(item =><div key={item.id}>
                    
                    <div className="flex gap-5 pt-5">
                        <div>
                            <img src={item.img} alt="" />
                        </div>
                        <div className="grid grid-cols-1 ">
                            <div className="font-semibold">
                                {item.name}
                            </div>
                            <div className="text-gray-600">
                                {item.price}
                            </div>
                        </div>
                    </div>

                </div> )
            }
        </div>
    );
};

export default Cart;