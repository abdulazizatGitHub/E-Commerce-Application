import { NavItem, NavLink, } from "reactstrap";
import {MdContactSupport} from 'react-icons/md';
import {HiOutlineMail} from 'react-icons/hi';
import {FaUser} from 'react-icons/fa';
import {FiPhoneCall} from 'react-icons/fi'
import { Link } from "react-router-dom";
import '../../Assets/CSS/Footer.css';
function Footer()
{
    return(
        <div className="contain">
            <footer className="footer">
            <ul>
                <NavItem className="items">TALK TO US</NavItem>
                <hr />
                <NavLink className="links"><MdContactSupport /> help@watchgallery.com</NavLink>
                <NavLink className="links"><FiPhoneCall /> 0311-9982502</NavLink>
                <NavLink className="links"><HiOutlineMail /> Contact Us</NavLink>
                <NavLink className="links"><FaUser /> Account</NavLink>
            </ul>
            <ul>
                <NavItem className="items">ABOUT</NavItem>
                <hr />
                <NavLink className="links">Our Story</NavLink>
                <NavLink className="links">What's New</NavLink>
                <NavLink className="links">Reviews</NavLink>
                <NavLink className="links">Partnerships</NavLink>
            </ul>
            <ul>
                <NavItem className="items">CUSTOMER SERVICE</NavItem>
                <hr />
                <Link style={{textDecoration: 'none', color: '#fff'}} to="/Payment" className="links">Payment Options</Link>
                <NavLink className="links">Free Shipping</NavLink>
                <NavLink className="links">30 Day Returns/Exchange</NavLink>
                <NavLink className="links">Special Discounts</NavLink>
                <NavLink className="links">Track Order</NavLink>
                <NavLink className="links">FAQS</NavLink>
            </ul>
        </footer>
        <div className="subs">
        <h6>Subscribe to Our NEWSLETTER</h6>
        
        <span className="subs-div">
        <input type="text" placeholder="watchgallery@gmail.com" name="text"  />
            <button>Subscribe</button>
        </span>
        </div>
        </div>
    )
}
export default Footer;