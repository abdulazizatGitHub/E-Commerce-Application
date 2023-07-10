import { createContext, useEffect, useState } from "react";


export const MyContext = createContext();

const MYContextProvider = ({children}) =>
{
    const [data, setData] = useState([]);
    
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [admin, setAdmin] = useState('');
  useEffect(() => {
    let TotalPrice = 0;
    cartItems.map(item => TotalPrice += item.price * item.quantity)
    setTotalPrice(TotalPrice);
  },[cartItems]);

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item._id !== id);
    setData(updatedData);
  };

  const addToCart = (product, quantity) =>
  {
    let item = [...cartItems]
    let index = item.findIndex(data => data._id === product._id)
    if(index !== -1)
    {
        item[index].quantity += quantity;
    }else{
        product.quantity = quantity
        item = [...item, product]
    }
    setCartItems(item);
    setCartCount(cartCount + 1);
  };

  const removeFromCart = (productId) =>
  {
    let item = [...cartItems];
    setCartItems(item.filter((item) => item._id !== productId));
    setCartCount(cartCount - 1);
  }
  const handleCartQuantity = (type, product) =>
  {
      let item = [...cartItems];
      let index = item.findIndex((data) => data._id === product._id);
      if(type === 'incriment')
      {
        item[index].quantity += 1;
      }
      else if(type === 'decriment')
      {
        if(item[index].quantity === 1)
        {
          return;
        }
        item[index].quantity -= 1;
      }
      setCartItems(item);
  }
    return(
        <MyContext.Provider value={{data, handleDelete, cartItems, setCartItems, addToCart, removeFromCart, cartCount, setCartCount, cartTotal, setCartTotal, handleCartQuantity, totalPrice, admin, setAdmin
        }}
        >
            {children}
        </MyContext.Provider>
    )
}
export default MYContextProvider;