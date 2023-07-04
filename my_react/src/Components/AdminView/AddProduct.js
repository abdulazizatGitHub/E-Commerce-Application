import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../../Assets/CSS/addProduct.css';
import { useState } from 'react';
import { addProduct } from '../../Services/API';
import AdminHeader from './AdminHeader';

function Example() {

  const [productData, setProductData] = useState({
    name: "",
    category: "",
    discription: "",
    dialradius: "",
    price: 0,
    image: null
  });

  const { name, category, discription, dialradius, price, image } = productData;

  const handleInputChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
    
  };
  const handleImageChange = (e) =>
  {
    setProductData({...productData, [e.target.name]: e.target.files[0]});
  }
  
  const handleSubmitData = async (e) => {
    e.preventDefault();
  
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('category', category);
      formData.append('discription', discription);
      formData.append('dialradius', dialradius);
      formData.append('price', price);
      formData.append('image', image);
  
      await addProduct(formData);
      
      alert('Data is stored');
    } catch (error) {
      console.log('Data not passed');
    }
  };
  

  return (
    <>
      <AdminHeader />
      <body>
      <Form className='product-from'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name='name'
                placeholder="name"
                autoFocus
                onChange = {handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                name='category'
                placeholder="category"
                onChange = {handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Discription</Form.Label>
              <Form.Control
                type="text"
                name='discription'
                placeholder="description"
                onChange = {handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Dial Radius</Form.Label>
              <Form.Control
                type="text"
                name='dialradius'
                placeholder="dial radius"
                onChange = {handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                name='price'
                placeholder="price"
                onChange = {handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Picture</Form.Label>
              <Form.Control
                type="file"
                name='image'
                onChange = {handleImageChange}
              />
            </Form.Group>
            <Button onClick={handleSubmitData} variant="primary" type="submit">
           Click here to submit form
        </Button>
          </Form>
      </body>
    </>
  );
}

export default Example;
