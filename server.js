import express, { Router } from 'express';
import dotenv from 'dotenv'
import userRouter from './src/routers/userRouter.js';
import mongoose from 'mongoose'
import customerRouter from './src/routers/customerRouter.js';


dotenv.config();
const app = express();

app.get('/', (req, res) => {
    res.send('helloo')
})

app.use(express.json())
app.use('/api/user', userRouter)
app.use('/api/customer', customerRouter)

const PORT = process.env.PORT || 8000;
const URI = process.env.MONGO_URI

mongoose.connect(URI).then(() => {
    app.listen(PORT, () => {
        console.log(`server running on the port ${PORT}`);

    })
    console.log('database connected')
})
    .catch((error) => {
        console.log('Error connecting to database', error)
    })

