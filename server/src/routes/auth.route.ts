import express from 'express';
import { loginUser } from '../controllers/auth.controller';
import { createUser } from '../controllers/users.controller';


const authRouter = express.Router();

authRouter.post('/register', createUser);
authRouter.post('/login', loginUser);

export { authRouter };
