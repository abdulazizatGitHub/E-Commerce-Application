import bodyParser from 'body-parser';
import cors from "cors";
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Customer from './Routes/Customer.js';
import ProductData from './Routes/ProductData.js';
import Login from './Routes/Login.js';
import DeleteProduct from './Routes/DeleteProduct.js';

dotenv.config();

const app = express();

const url = process.env.MONGODB_URL;

const conection = mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true})

conection.then(() => {
    console.log("Successfully Connected to Database");
});

app.listen(5000);

app.use(cors());
app.use(bodyParser.json( { extended: true } ));
app.use(bodyParser.urlencoded( { extended: true } ));
app.use('/SignUp', Customer);
app.use("/Login", Login);

app.use('/Admin/AddProduct', ProductData);
app.use('/Admin/ViewProduct',ProductData);
app.use('/images',express.static('images'));

app.use('/MenProduct', ProductData);
app.use('/WomenProduct', ProductData);
app.use('/CheckOut', ProductData);
app.use('/Admin/ViewProduct/:id', ProductData);