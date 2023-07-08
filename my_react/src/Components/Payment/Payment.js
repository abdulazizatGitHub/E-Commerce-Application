import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../Common/Context';
import { useNavigate } from 'react-router-dom';
import Footer from '../ProductPage/Footer';
import JazzcashForm from './paymentCheckout';
import '../../Assets/CSS/Payment.css';
function Payment() {
  const { cartItems, totalPrice } = useContext(MyContext);
  const [shippingData, setShippingData] = useState({
    email: '',
    address: '',
    city: '',
  });

  const handleShippingDetails = (e) => {
    setShippingData({ ...shippingData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };

  const handleJazzcashSuccess = (paymentResponse) => {
    // Process the Jazzcash payment response
    console.log(paymentResponse);
  
    // Check the payment status and perform actions accordingly
    if (paymentResponse.status === 'success') {
      // Payment was successful
      console.log('Payment successful');
      // Perform actions like updating the UI, showing a success message, etc.
    } else if (paymentResponse.status === 'failure') {
      // Payment failed
      console.log('Payment failed');
      // Perform actions like showing an error message, redirecting to an error page, etc.
    } else {
      // Payment status is unknown or not handled
      console.log('Payment status unknown');
      // Perform actions accordingly or handle the case
    }
  };
  
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <div className="payment-div">
        <div className="payment-container">
          <h5>PAYMENT METHODS</h5>
          <div className="payments">
            <span>Easypaisa</span>
            <span>JazzCash</span>
            <span>Credit Card</span>
          </div>
          <div className="form-div">
            <h6>SHIPPING DETAILS</h6>
            <form className="form-contain">
              <input
                onChange={handleShippingDetails}
                name="email"
                type="email"
                placeholder="Email"
              />

              <div className="address-details">
                <input
                  onChange={handleShippingDetails}
                  name="address"
                  type="text"
                  placeholder="Shipping Address"
                />
                <input
                  onChange={handleShippingDetails}
                  name="city"
                  type="text"
                  placeholder="City"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="order-div">
          <div className="order-details">
            <h5>Order Summary</h5>
            <div>
              {cartItems.map((item) => (
                <div className="final-detail" key={item._id}>
                  <span className="pay-img_container">
                    <img
                      className="pay-img"
                      variant="top"
                      src={`https://watchgallery-data.onrender.com/${item.image}`}
                      alt=""
                    />
                    <span className="pay-name">{item.name}</span>
                    <span className="pay-quantity">{item.quantity}</span>
                    <span className="pay-price">&#8360;.{item.price}</span>
                  </span>
                </div>
              ))}
            </div>
            <hr className="devide" />
          </div>
          <div className="summary-detail">
            <span className="price-label">
              Sub Total: <span className="price-no">&#8360;.{totalPrice}</span>
            </span>
            <span className="price-label">
              Delivery Charges: <span className="price-no">&#8360;.0.00</span>
            </span>
            <span className="price-label">
              Tax: <span className="price-no">&#8360;.0.00</span>
            </span>
            <span className="price-label">
              Total: <span className="price-no">&#8360;.{totalPrice}</span>
            </span>
          </div>
        </div>
        <div className="payment-btn">
          <button>CHECKOUT</button>
          <button onClick={navigateToHome}>Return to Home</button>
        </div>
      </div>
      <JazzcashForm onSuccess={handleJazzcashSuccess} />
      <Footer />
    </div>
  );
}

export default Payment;
