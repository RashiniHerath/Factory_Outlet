import React, { useState } from "react";
import './Navbar.css';
import logo from '../Assets/logo1.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [menu,setMenu]=useState("shop") // create userState menu
    return (
        <div className='navbar'>
            <div className='nav__logo'>
                <img src={logo} alt='' />
                <p>FACTORY OUTLET</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}}to='/mens'>Mens</Link>{menu==="mens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}}to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
                <li className="last-menu-item" onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}}to='/mens'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
            </ul>
            <div className='nav_login_cart'>
               <Link to='/login'><button>Login</button></Link>
               <Link to='/cart'><img src={cart_icon} alt='' /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar;
