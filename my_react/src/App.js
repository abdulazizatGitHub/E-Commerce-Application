import Header from "./Components/ProductPage/Header";
import {Routes, Route, useLocation } from 'react-router-dom';
import React from "react";
import Home from "./Components/ProductPage/Home";
import MenProduct from "./Components/Men/MenProducts";
import CheckOut from "./Components/CheckOut/CheckOut";
import Payment from "./Components/Payment/Payment";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Login/SignUp";
import WomenProduct from "./Components/Women/WomenProduct";
import Cart from "./Components/AddToCart/Cart";
import ContactUs from "./Components/ContactUs/ContactUs";
import AboutUs from "./Components/AboutUs/AboutUs";
import Admin from "./Components/AdminView/Admin";
import ViewProduct from "./Components/AdminView/ViewProduct";
import Example from "./Components/AdminView/AddProduct";
import PaymentCheckout from "./Components/Payment/paymentCheckout";
import ForgotPassword from "./Components/Login/ForgotPassword";

function App()
{

  const location = useLocation();

  const noNavbar = !location.pathname.includes("/Admin");

  return(
    <div>
        {noNavbar && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MenProduct" element= {<MenProduct />} />
          <Route path="/CheckOut/:id" element = {<CheckOut />}/>
          <Route path="/Payment" element = {<Payment />}/>
          <Route path="/Login" element={<Login />}/>
          <Route path="/SignUp" element = {<SignUp />} />
          <Route path="/WomenProduct" element = {<WomenProduct />} />
          <Route path="/Cart" element = {<Cart />} />
          <Route path="/ContactUs" element = {<ContactUs />} />
          <Route path="/AboutUs" element = {<AboutUs />} />
          <Route path="/Admin" element = {<Admin />} />
          <Route path="/Admin/AddProduct" element = {<Example />} />
          <Route path="/Admin/ViewProduct" element = {<ViewProduct />} />
          <Route path="/paymentCheckout" element = { <PaymentCheckout /> } />
          <Route path="/Login/ForgotPassword" element = { <ForgotPassword /> } />
        </Routes>
    </div>
  );
}
export default App;
