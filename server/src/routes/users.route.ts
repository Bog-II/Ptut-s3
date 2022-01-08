import express from 'express';
import {
  createUser,
  getAllUsers,
  updateUser,
} from '../controllers/users.controller';
const usersRouter = express.Router();

usersRouter.get('/', getAllUsers);
usersRouter.post('/', createUser);

usersRouter.put('/:id', updateUser);

usersRouter.get('/', (req, res) => {});

export { usersRouter };
