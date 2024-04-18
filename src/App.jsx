import React,{useState,useEffect} from 'react'
import "./App.css"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
//!--------------Pages-----------------------------------------

  import NavBar from "./Components/NavBar"
  import Home from './Pages/Home/Home'
  import Product from './Pages/Products/Product'
  import Cart from './Pages/Cart/Cart'

//!----------------------------------------------------------------

export default function App() {
  return (
    <div>


      <BrowserRouter>
        <NavBar/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      
      </BrowserRouter>


    </div>
  )
}
