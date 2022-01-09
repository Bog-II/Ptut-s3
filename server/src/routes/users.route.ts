import express from 'express';
import { getDocumentsWithJWT } from '../controllers/document.controller';
import {
  createUser,
  deleteUser,
  getAllUsers,
  updateUser,
} from '../controllers/users.controller';
import { authJWT } from '../verificators/jwt.verificators';
const usersRouter = express.Router();

usersRouter.get('/', getAllUsers);
// usersRouter.get('/', authJWT, getUser);
// usersRouter.get('/:id/avatar', getUserAvatar);
usersRouter.post('/', createUser);
usersRouter.put('/', authJWT, updateUser);

usersRouter.delete('/', authJWT, deleteUser);
usersRouter.get('/documents', authJWT, getDocumentsWithJWT);

export { usersRouter };
