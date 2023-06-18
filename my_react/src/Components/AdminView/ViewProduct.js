import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import { getProductData } from '../../Services/API';
import AdminHeader from './AdminHeader';

function ViewProduct() {
  const [ProductDetails, setProductDetails] = useState([]);

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    const result = await getProductData();
    setProductDetails(result.data);
  }

  return (
    <>
      <AdminHeader />
      <body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Discription</th>
              <th>Dial Radius</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {ProductDetails.map((details, index) => (
              <tr key={index}>
                <img style={{width: "5rem", height: "5rem"}} src={`https://watchgallery-data.onrender.com/${details.image}`} alt="Product" />
                <td>{details.name}</td>
                <td>{details.discription}</td>
                <td>{details.dialradius}</td>
                <td>{details.category}</td>
                <td>{details.price}</td>
              </tr>
            ))}
          </tbody>
        </Table>

      </body>
    </>
  );
}

export default ViewProduct;