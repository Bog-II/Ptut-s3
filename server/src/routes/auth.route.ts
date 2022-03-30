import express from 'express';
import { loginUser, logoutUser, retrieveUserData } from '../controllers/auth.controller';
import { createUser } from '../controllers/users.controller';

const authRouter = express.Router();

authRouter.get('/', retrieveUserData);
authRouter.get('/logout', logoutUser);

authRouter.post('/register', createUser);
authRouter.post('/login', loginUser);

export { authRouter };
