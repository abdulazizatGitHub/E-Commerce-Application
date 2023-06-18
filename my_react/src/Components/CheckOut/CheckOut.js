import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useParams } from "react-router-dom";
import '../../Assets/CSS/Checkout.css';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import Footer from '../ProductPage/Footer';
import '../../Assets/CSS/Checkout.css';
import { FaMinus, FaPlus } from "react-icons/fa";
import { MyContext } from '../../Common/Context';
import { getProductById } from '../../Services/API';


function CheckOut() {
  const { id } = useParams();
  const {  addToCart, } = useContext(MyContext);
  const [quantity, setQuantity] = useState(1);
  const [productData, setProductData] = useState([]);

  
  useEffect(() => {
    window.scrollTo(0, 0);
  
    const getProductDetails = async () => {
      try {
        const response = await getProductById(id);
        setProductData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("No data found...");
      }
    };
  
    getProductDetails();
  }, [id]);

  const increaseQuantity = () =>
{
  setQuantity((prev) => prev + 1);
}
const decreaseQuantity = () =>
{
  setQuantity((prev) =>{
  if(prev === 1)
  {
    return 1;
  }
  return prev -1;
  })
};

  const totalPrice = useMemo(() => {
    return parseInt(productData.price) * quantity;
  }, [productData, quantity]);

  
  if (!productData) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
        <div className='checkout'>
      <div className='img-div'>
      <img className='checkout-img' src={`https://watchgallery-data.onrender.com/${productData.image}`} alt='' />
      </div>
      <div className='checkout-details'>
        <h2 className='checkout-productName'>{productData.name}</h2>
        <p className='checkout-productDisc'>{productData.discription}</p>
        <p className='checkout-productDial'>{productData.dialradius}</p>
        <p className='checkout-productPrice'>PKR| {productData.price}</p>
        <p className='total-price'>Total Price: PKR| {totalPrice}</p>
        <div className="count-div">
            <button onClick={decreaseQuantity}> <FaMinus /> </button>
            <h6 className="count-value">{quantity}</h6>
            <button onClick={increaseQuantity}> <FaPlus /> </button>
        </div>
        <div className='btn-div'>
          <button onClick={() => {
            addToCart(productData, quantity);
            setQuantity(1);
          }}>Add To Cart <HiOutlineShoppingCart className='cartIcon'/></button>
          {/* <button onClick={navigatetoPayment}>Shop now <MdPayment /></button> */}
        </div>
      </div>
      

    </div>
    <Footer />
    </div>
  );
}
export default CheckOut;
