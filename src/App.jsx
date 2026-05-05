
import { Suspense, useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import State from './components/state/State'
import Products from './components/products/Products'
import Cart from './components/cart/Cart'
import Description from './components/products/description/Description'
import { ToastContainer } from 'react-toastify'
import StepCard from './components/stepcards/StepCard'
import Pricing from './components/pricing/Pricing'
import Footer from './components/footer/Footer'


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
     <ToastContainer></ToastContainer>
      <Suspense>
        <Navbar carts = {carts}></Navbar>
      </Suspense>
      <Suspense>
        <Banner></Banner>
      </Suspense>
      
      <Suspense>
        <State></State>
      </Suspense>

      <Description></Description>
      
<div className="tabs tabs-box justify-center">

  <input
    type="radio"
    name="my_tabs_1"
    className={`tab rounded-full w-40 ${
      activeTab === "product"
        ? "bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 text-white"
        : ""
    }`}
    aria-label="Products"
    checked={activeTab === "product"}
    onChange={() => setActiveTab("product")}
  />

  <input
    type="radio"
    name="my_tabs_1"
    className={`tab rounded-full w-40 ${
      activeTab === "cart"
        ? "bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 text-white"
        : ""
    }`}
    aria-label={`Cart (${carts.length})`}
    checked={activeTab === "cart"}
    onChange={() => setActiveTab("cart")}
  />

</div>

      <Suspense fallback={<span className="loading loading-spinner text-primary"></span>
      }>
        {activeTab === "product" ? <Products productsPromise={productsPromise} carts={carts} setCarts={setCarts} ></Products> : null}
      </Suspense>
     {activeTab === "cart" ? <Cart carts = {carts} setCarts = {setCarts} ></Cart> : null}

     <StepCard></StepCard>

     <Pricing></Pricing>
      <Footer></Footer>
    </>
  )
}

export default App
