import express from 'express'
import { addCustomer, getCustomer } from '../controllers/customerController.js'

const customerRouter = express.Router();

customerRouter.post('/add', addCustomer)
customerRouter.get('/get/:phone', getCustomer)



export default customerRouter