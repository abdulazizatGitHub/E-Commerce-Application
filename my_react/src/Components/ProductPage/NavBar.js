import React, { useContext } from 'react';
import {Nav} from 'react-bootstrap';
import {NavLink} from "react-router-dom";
import "../../Assets/CSS/NavBar.css";
import logo from '../../Assets/Images/myLogo.png';
import { FiShoppingCart } from 'react-icons/fi';
import { MyContext } from '../../Common/Context';
import { FaUserLock } from 'react-icons/fa';
function NavBar()
{
    const {cartCount} = useContext(MyContext);
    
    return(
        <header className='container-fluid'>
            <img className='img' src={logo} alt='logo'/>
            <Nav className='nav'>
                <ul>
                    <NavLink to='/' className='nav-text'>Home</NavLink>
                    <NavLink to='/AboutUs' className='nav-text'>ABOUT US</NavLink>
                    <NavLink to='ContactUs' className='nav-text'>CONTACT US</NavLink>
                    <NavLink to= '/Admin' className='nav-text' >ADMIN</NavLink>
                    <NavLink  to='/Login' className='nav-text'><FaUserLock /></NavLink>
                    <NavLink to="/Cart"className= 'cart-trolley'>
                        <FiShoppingCart className='cart-icon'/>
                        <span className='cart-total'>{cartCount}</span>
                    </NavLink>
                </ul>
            </Nav>
        </header>
    )
}
export default NavBar;