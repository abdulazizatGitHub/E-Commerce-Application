import express from 'express';
import { addCustomer, getCustomer } from '../Controllers/customerController.js';
const router = express.Router();

router.post("/", addCustomer);
// router.post("/SignUp/Google", addGoogleCustomer);
// router.post("/Login", getCustomer);

export default router;