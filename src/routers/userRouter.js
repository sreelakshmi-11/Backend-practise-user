
import express from 'express';
import { createUser, deleteUser, getUsers, updateUser } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/add-user', createUser);
userRouter.get('/users', getUsers);
userRouter.put('/update', updateUser)
userRouter.delete('/delete', deleteUser)

export default userRouter