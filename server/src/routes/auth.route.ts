import express from 'express';
import { createUser } from '../controllers/users.controller';
const authRouter = express.Router();

authRouter.post('/register', createUser);

export { authRouter };
