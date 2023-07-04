import axios from "axios";

const url = "https://watchgallery-data.onrender.com";

export const getCustomer = async (cridentials) =>
{
   return await axios.post(`${url}/Login`, cridentials);
}

export const addCustomer = async (customerData) =>
{
   return await axios.post(`${url}/SignUp`, customerData);
}

export const addProduct = async (formData) =>
{
   return await axios.post(`${url}/Admin/AddProduct`, formData);
}

export const getProductData = async () =>
{
   return await axios.get(`${url}/Admin/ViewProduct`);
}

export const getProductByCategory = async (category) =>
{
   return await axios.post(`${url}/MenProduct/category`,category);
}

export const getProductById = async (id) =>
{
   return await axios.get(`${url}/CheckOut/${id}`);
}
export const deleteProduct = async (productId) =>
{
   return await axios.delete(`${url}/Admin/ViewProduct/${productId}`);
}