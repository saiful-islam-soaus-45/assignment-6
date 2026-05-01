import { Suspense } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import State from './components/state/State'
import MainSection from './components/main section/MainSection'
import Products from './components/products/Products'

const fetchProducts = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const productsPromise = fetchProducts();
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
      <Suspense>
        <MainSection></MainSection>
      </Suspense>
      <Suspense fallback={<span className="loading loading-spinner text-primary"></span>
}>
        <Products productsPromise={productsPromise}></Products>
      </Suspense>
    </>
  )
}

export default App
