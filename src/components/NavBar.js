import React from 'react';
import './NavBar.css';
import CartWidget from './CartWidget.js';

const NavBar = () => {
  return (
    <nav className="NavBar">
        <ul>
            <li><span class="material-icons" style={{'font-size':50,}}>redeem</span></li>
            <li><a href="#">Remeras</a></li>
            <li><a href="#">Tazas, Vasos y Chops</a></li>
            <li><a href="#">Calcomanias</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">FAQ</a></li>
            <li><CartWidget /></li>
        </ul>
    </nav>
  )
}

export default NavBar