// import React from 'react';

import { use } from "react";
import AvailableProducts from "../availableProducts/AvailableProducts";

const Products = ({productsPromise}) => {
    // console.log(productsPromise)
    const products = use(productsPromise);
    // console.log(products);
    return (
        <div className="container mx-auto">
           <p>djnd</p>

            <AvailableProducts products = {products}></AvailableProducts>
        </div>
    );
};

export default Products;