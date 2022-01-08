import express from 'express';
import {
  createUser,
  deleteUser,
  getAllUsers,
  updateUser,
} from '../controllers/users.controller';
const usersRouter = express.Router();

usersRouter.get('/', getAllUsers);
// usersRouter.get('/:id', getUser);
// usersRouter.get('/:id/avatar', getUserAvatar);
usersRouter.post('/', createUser);
usersRouter.put('/:id', updateUser);

usersRouter.delete('/:id', deleteUser);


export { usersRouter };
