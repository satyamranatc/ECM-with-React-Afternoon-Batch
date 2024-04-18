import React from 'react'
import  "./NavBar.css"
import { Link } from 'react-router-dom'
export default function NavBar() {
  return (
    <nav className='MainNav'>

        <h2>SHOP.IO</h2>

        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/product">Product</Link></li>
            <li><Link to="/cart">Cart</Link></li>
        </ul>

        

    </nav>
  )
}
