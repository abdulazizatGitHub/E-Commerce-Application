
import '../../Assets/CSS/Payment.css';
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../Common/Context";
import { useNavigate } from "react-router-dom";
import Footer from '../ProductPage/Footer';
function Payment() {
    const { cartItems, totalPrice } = useContext(MyContext);
    const [ paymentData, setPaymentData ] = useState({
        email: '',
        address: '',
        city: '',
    })
    const navigate = useNavigate();
    const navigateToHome = () =>
    {
        navigate('/');
    }
    useEffect(() => {
        window.scroll(0, 0);
    },[])
    
    return (
        <div>
            <div className="payment-div">
            <div className="payment-container">
                <h5>PYMENT METHODS</h5>
                <div className="payments">
                    <span>Easypaisa</span>
                    <span>JazzCash</span>
                    <span>Credit Card</span>
                </div>
                <div className="form-div">
                    <h6>SHIPPING DETAILS</h6>
                    <form className="form-contain">
                        <input name='email' type="email" placeholder="Email" />
                        {/* <div className="name-div">
                            <input type="text" placeholder="First Name" />
                            <input type="text" placeholder="Last Name" />
                        </div> */}
                        <div className="address-details">
                            <input name='address' type="text" placeholder="Shipping Address" />
                            <input name='city' type="text" placeholder="City" />
                            {/* <input type="text" placeholder="Zip/Postal Code" /> */}
                            {/* <select size='1'>
                                <option value="" disabled selected>Country/Region</option>
                                <option>Pakistan</option>
                            </select>
                            <select size='1'>
                                <option value="" disabled selected>State/Province</option>
                                <option>Khyber Pukhtun Khwa</option>
                                <option>Punjab</option>
                                <option>Sindh</option>
                                <option>Balochistan</option>
                            </select> */}
                            {/* <input type="text" placeholder="Phone Number" /> */}
                        </div>
                    </form>
                </div>

            </div>
            <div className="order-div">
                <div className="order-details">
                    <h5>Order Summary</h5>
                    <div>
                        {cartItems.map((item => (
                            <div className="final-detail">
                                <span className="pay-img_container">
                                <img className='pay-img' variant='top' src={`https://watchgallery-data.onrender.com/${item.image}`} alt="" />
                                    <span className="pay-name">{item.name}</span>
                                    <span className="pay-quantity">{item.quantity}</span>
                                    <span className="pay-price">&#8360;.{item.price}</span>
                                </span>
                            </div>
                        )))}
                    </div>
                    <hr className="devide" />
                </div>
                <div className="summary-detail">
                    <span className="price-label">Sub Total: <span className="price-no">&#8360;.{totalPrice}</span></span>
                    <span className="price-label">Delivery Charges: <span className="price-no">&#8360;.0.00</span></span>
                    <span className="price-label">Tax: <span className="price-no">&#8360;.0.00</span></span>
                    <span className="price-label">Total: <span className="price-no">&#8360;.{totalPrice}</span></span>
                </div>
            </div>
            <div className="payment-btn">
                <button>CHECKOUT</button>
                <button onClick={navigateToHome}>Return to Home</button>
            </div>
        </div>
        <Footer />
        </div>
    )
}
export default Payment;