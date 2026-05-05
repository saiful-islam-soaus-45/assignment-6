
import { use } from "react";
import ProductCard from "../productscard/ProductCard";

const Products = ({ productsPromise, carts, setCarts}) => {


    const products = use(productsPromise);
    
    
    



    return (
        <div className="py-20 max-w-7xl mx-auto">


            

            <div className="grid grid-cols-1 ml-5  md:grid-cols-2 md:ml-3 lg:grid-cols-3  space-y-9 space-x-5">
                {
                    products.map((product) => (
                        <ProductCard key={product.id} product = {product} carts ={carts} setCarts = {setCarts} ></ProductCard>
                    ))
                }
            </div>



        </div>
    );
};

export default Products;