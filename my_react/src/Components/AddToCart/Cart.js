import React, { useContext } from 'react';
import '../../Assets/CSS/Cart.css';
import { MyContext } from '../../Common/Context';
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';
import { MdPayment } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { Container } from 'reactstrap';


function Cart() {
    const { cartItems, removeFromCart, handleCartQuantity, totalPrice } = useContext(MyContext);
    const navigate = useNavigate();

    const navigatetoPayment = () => {
        navigate("/Payment");
    }
    return (
        <Container className='cont'>
            <div className='cart-contain'>

                {
                    cartItems.map((item) => (
                        <div className='cart-product_details'>
                            <div className='cart-image'>
                            <img className='cart-img' variant='top' src={`https://watchgallery-data.onrender.com/${item.image}`} alt="" />
                            </div>
                            <div className='prod-details'>
                                <div className='cart-item_name'>
                                    {item.name}
                                    <br />
                                    {item.discription}
                                </div>
                                <div className='cart-item_price'>
                                    PRICE  <br />&#8360;.{item.price}
                                </div>
                                <div className='cart-quantity'>
                                    <span className='quantity-btn' style={{ borderRadius: '0.5rem' }} onClick={() => handleCartQuantity('decriment', item)}><FaMinus /></span>
                                    <span >{item.quantity}</span>
                                    <span className='quantity-btn' style={{ borderRadius: '0.5rem' }} onClick={() => handleCartQuantity('incriment', item)}><FaPlus /></span>
                                </div>
                                <div className='total-price'>
                                    Total Price <br />&#8360;. {item.price * item.quantity}
                                </div>
                                <FaTrash className='trash' onClick={() => removeFromCart(item._id)} />
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='checkout-div'>
                <span className='sub-total'>Sub Total: &#8360;. {totalPrice}</span>
                <span className='btn-container'>
                    <button className='pay-button' onClick={navigatetoPayment}>Shop now <MdPayment className='pay-icon' /></button>
                </span>
            </div>
        </Container>
    );
}

export default Cart;
