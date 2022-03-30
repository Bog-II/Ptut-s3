import express from 'express';
import { getDocumentsWithJWT } from '../controllers/document.controller';
import {
  createUser,
  deleteUser,
  getAllUsers,
  getMyInfo,
  updateUser,
} from '../controllers/users.controller';
const usersRouter = express.Router();

usersRouter.get('/', getAllUsers);
usersRouter.get('/me', getMyInfo)
// usersRouter.get('/', authJWT, getUser);
// usersRouter.get('/:id/avatar', getUserAvatar);
usersRouter.post('/', createUser);
usersRouter.put('/', updateUser);

usersRouter.delete('/', deleteUser);
usersRouter.get('/documents', getDocumentsWithJWT);

export { usersRouter };
