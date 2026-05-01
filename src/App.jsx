import { Suspense } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import State from './components/state/State'

function App() {
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
    </>
  )
}

export default App
