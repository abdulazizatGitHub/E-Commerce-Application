import React, { useContext, useState } from 'react';
import {Button, Nav} from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import "../../Assets/CSS/NavBar.css";
import logo from '../../Assets/Images/myLogo.png';
import { FiShoppingCart } from 'react-icons/fi';
import { MyContext } from '../../Common/Context';
import { FaUserLock } from 'react-icons/fa';
import { deleteCustomer } from '../../Services/API';

function NavBar()
{
    const {cartCount } = useContext(MyContext);
    const [ showSessionData, setShowSessionData ] = useState(false);

    const session = JSON.parse(localStorage.getItem('customer'));

    const handleUserSession = () => {
        if(session) {
            setShowSessionData(!showSessionData);
        } else {
            window.location.href = '/Login';
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('customer');
        localStorage.removeItem('token');
        setShowSessionData(false);
        window.location.href = '/Login';
    }
    
    const handleDeleteCustomer = async (id) => {
        try {
            const deletedCustomer = await deleteCustomer(id);
            const { response } = deletedCustomer.data;

            if(response) {
                handleLogout();
            } else {
                alert("Account not Deleted");
            }
            
        } catch (error) {
            console.log(error);
            alert("Account Does not exist");
        }
    }
    return(
        <header className='container-fluid'>
            <img className='img' src={logo} alt='logo'/>
            <Nav className='nav'>
                <ul>
                    <NavLink to='/' className='nav-text'>Home</NavLink>
                    <NavLink to='/AboutUs' className='nav-text'>ABOUT US</NavLink>
                    <NavLink to='ContactUs' className='nav-text'>CONTACT US</NavLink>
                    <NavLink className='nav-text' onClick={handleUserSession} ><FaUserLock /></NavLink>
                    <NavLink to="/Cart"className= 'cart-trolley'>
                        <FiShoppingCart className='cart-icon'/>
                        <span className='cart-total'>{cartCount}</span>
                    </NavLink>
                </ul>
            </Nav>
            {session && showSessionData && (
                <div  className='session-data'>
                    <p>Status: Login</p>
                    <p>UserName: {session.firstName} {session.lastName} </p>
                    <p>{session.email} </p>
                    <button className='logout' onClick={handleLogout}>Logout</button>
                    <Button variant='primary' type='submut' onClick={() => handleDeleteCustomer(session._id)}>
                        Delete My Account
                        </Button>
                </div>
            )
            }
        </header>
    )
}
export default NavBar;