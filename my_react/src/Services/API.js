import axios from "axios";

const url = "https://watchgallery-data.onrender.com";

export const getCustomer = async (cridentials) =>
{
   console.log(cridentials);
   return await axios.post(`${url}/Login`, cridentials);
}

export const addCustomer = async (customerData) =>
{
   return await axios.post(`${url}/SignUp`, customerData);
}
export const deleteCustomer = async (id) =>
{
   return await axios.delete(`${url}/${id}`);
}
export const sendOTP = async (email,otpEmail) => 
{
   return await axios.post(`${url}/Login/ForgotPassword?email=${email}`, otpEmail);
}
export const changePassword = async (email, resetFormData) =>
{
   return await axios.put(`${url}/Login/ForgotPassword?email=${email}`, {email, resetFormData});
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
export const updateProduct = async (id, updatedFormData) => {
   console.log(updatedFormData);
   return await axios.put(`${url}/Admin/ViewProduct/${id}`, updatedFormData)
}

export const initiateJazzCashPayment = async (paymentData) => {
   try {
     const response = await axios.post(`${url}/JazzCashPayment`, paymentData);
     return response.data;
   } catch (error) {
     console.error(error);
     throw new Error('Failed to initiate JazzCash payment');
   }
 };