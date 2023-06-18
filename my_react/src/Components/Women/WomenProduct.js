import React, { useContext, useEffect, useState } from 'react';
import CarD from '../Men/Card';
import '../../Assets/CSS/MenProduct.css';
import Footer from '../ProductPage/Footer';
import { MyContext } from '../../Common/Context';
import { getProductByCategory } from '../../Services/API';
function WomenProduct()
{
    const { handleDelete } = useContext(MyContext);
    const [womenProductData, setWomenProductData] = useState([]);
    useEffect(() => {
      window.scrollTo(0, 0);
      getWomenProductDetails();
    }, []);

    const getWomenProductDetails = async () =>
    {
      const womenData = await getProductByCategory({category: 'Women'});
      console.log(womenData);
      setWomenProductData(womenData.data);
    }
    return(
        <div>
      <div className='card-list'>
        {womenProductData.length === 0 ? (
          <div>No data available.</div>
        ) : (
          womenProductData.map((item) => (

            <div className='link' key={item._id}>
              <CarD
              id={item._id}
                img={`https://watchgallery-data.onrender.com/${item.image}`}
                name={item.name}
                discription={item.discription}
                dial={item.dialradius}
                price={item.price}
                onDelete={handleDelete}
              />
            </div>
          ))
        )}

      </div>
      <Footer />
    </div>
    )
}
export default WomenProduct;