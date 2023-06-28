import express from 'express';
import { getCustomer } from '../Controllers/customerController.js';

const router = express.Router();

router.post("/Login", getCustomer );

export default router;