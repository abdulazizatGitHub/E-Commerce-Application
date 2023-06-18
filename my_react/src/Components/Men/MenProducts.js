import React, { useContext, useEffect, useState } from 'react';
import CarD from '../Men/Card';
import '../../Assets/CSS/MenProduct.css';
import Footer from '../ProductPage/Footer';
import { MyContext } from '../../Common/Context';
import { getProductByCategory } from '../../Services/API';
function MenProduct() {
  const [menProductData, setMenProductData] = useState([]);
  const { handleDelete } = useContext(MyContext);
  useEffect(() => {
    window.scrollTo(0, 0);
    getMenProductDetails();
  },[]);

  const getMenProductDetails = async () =>
  {
    const MenData = await getProductByCategory({category:'Men'});
    setMenProductData(MenData.data);
  }
  return (
    <div>   
      <div className='card-list'>
        {menProductData.length === 0 ? (
          <div>No data available.</div>
        ) : (
          menProductData.map((item) => (

            <div className='link' key={item._id}>
              <CarD
                id = {item._id}
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
  );
}

export default MenProduct;
