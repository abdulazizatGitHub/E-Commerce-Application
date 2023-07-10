import { Table, Form, Modal, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { deleteProduct, getProductData, updateProduct } from '../../Services/API';
import AdminHeader from './AdminHeader';
import { FaTrash, FaEdit } from 'react-icons/fa';

function ViewProduct() {
  const [ProductDetails, setProductDetails] = useState([]);

  const [ ProductForm, setProductForm ] = useState(false);
  const [ productId, setProductId ] = useState(null);
  const [updatedData, setUpdatedData] = useState({
    name: "",
    category: "",
    discription: "",
    dialradius: "",
    price: 0,
    image: null
  });

  const { name, category, discription, dialradius, price } = updatedData;

  const showEditForm = (id) =>
  {

    setProductForm(true);

    const selectedProduct = ProductDetails.find((product) => product._id === id);
    if (selectedProduct) {
      setProductId(id);

      setUpdatedData({
        name: selectedProduct.name,
        category: selectedProduct.category,
        discription: selectedProduct.discription,
        dialradius: selectedProduct.dialradius,
        price: selectedProduct.price,
        image: selectedProduct.image, // Clear the image field, as we don't want to display the existing image while editing
      });
    }
  }

  const closeEditForm = () =>
  {
    setProductForm(false);
  }

  const handleInputChange = (e) =>
  {
    // Get the name and value of the input field that triggered the event
    const { name, value, type, files } = e.target;

    if(type === 'file')
    {
      setUpdatedData({ ...updatedData, image: files[0] });
    }
    else{
      // Update the selectedProductData state with the new value
      setUpdatedData({
        ...updatedData,
        [name]: value,
      });
    }
  }

  const handleUpdatedData = async (e) => {
    e.preventDefault();
    const updatedFormData = {
      name,
      category,
      discription,
      dialradius,
      price
    }
    
    console.log(updatedFormData);
    try {
      await updateProduct(productId, updatedFormData);
      
    } catch (error) {
      alert('Product not updated');
    }
  }
  useEffect(() => {
    getProductDetails();
  }, [ProductDetails]);

  const getProductDetails = async () => {
    const result = await getProductData();
    setProductDetails(result.data);
  }

  const handleDeleteProduct = async (id) =>
  {
    try {
      await deleteProduct(id);
    } catch (error) {
      console.log(error);
    }
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
                <td><FaTrash style={{cursor: "pointer"}} onClick={() => handleDeleteProduct(details._id)} /></td>
                <td><FaEdit style={{cursor: "pointer"}} onClick={() => showEditForm(details._id)} /></td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Modal show = {ProductForm} onHide={closeEditForm} >
        <Form style={{display: "flex",flexDirection: "column", alignItems: "center"}} >
            <Form.Group style = {{width: "80%"}} className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name='name'
                placeholder="name"
                autoFocus
                value={name}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group style = {{width: "80%"}} className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                name='category'
                placeholder="category"
                value={category}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group style = {{width: "80%"}} className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Discription</Form.Label>
              <Form.Control
                type="text"
                name='discription'
                placeholder="description"
                value={discription}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group style = {{width: "80%"}} className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Dial Radius</Form.Label>
              <Form.Control
                type="text"
                name='dialradius'
                placeholder="dial radius"
                value={dialradius}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group style = {{width: "80%"}} className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                name='price'
                placeholder="price"
                value={price}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group style = {{width: "80%"}} className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Picture</Form.Label>
              <Form.Control
                type="file"
                name='image'
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button onClick={handleUpdatedData} variant="primary" type="submit">
           SAVE
        </Button>
          </Form>
        </Modal>
      </body>
    </>
  );
}

export default ViewProduct;