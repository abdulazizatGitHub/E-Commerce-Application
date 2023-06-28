import express from 'express';
import { addCustomer } from '../Controllers/customerController.js';
const router = express.Router();

router.post("/SignUp", addCustomer);
// router.post("/SignUp/Google", addGoogleCustomer);

// router.post("/Login", getCustomer);

export default router;