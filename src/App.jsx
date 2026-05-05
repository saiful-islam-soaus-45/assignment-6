import { Suspense, useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import State from './components/state/State'
import Products from './components/products/Products'
import Cart from './components/cart/Cart'
import Description from './components/products/description/Description'

const fetchProducts = async () => {
  const res = await fetch("/data.json");
  return res.json();
};
const productsPromise = fetchProducts();

function App() {
  const [activeTab, setActiveTab] = useState("product");
 
  const [carts, setCarts] =useState([])
  
  
  return (
    <>
      <Suspense>
        <Navbar></Navbar>
      </Suspense>
      <Suspense>
        <Banner></Banner>
      </Suspense>
      
      <Suspense>
        <State></State>
      </Suspense>

      <Description></Description>
      
<div className="tabs tabs-box justify-center">
  <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Products" defaultChecked onClick={() =>setActiveTab("product")}/>
  <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Cart" onClick={() =>setActiveTab("cart")} />
  
</div>

      <Suspense fallback={<span className="loading loading-spinner text-primary"></span>
      }>
        {activeTab === "product" ? <Products productsPromise={productsPromise} carts={carts} setCarts={setCarts} ></Products> : null}
      </Suspense>
     {activeTab === "cart" ? <Cart carts = {carts} ></Cart> : null}
      
    </>
  )
}

export default App
