import express from 'express';
import { getDocumentsWithJWT } from '../controllers/document.controller';
import {
  createUser,
  deleteMe,
  getAllUsers,
  getMyInfo,
  updateMe,
} from '../controllers/users.controller';
const usersRouter = express.Router();

usersRouter.get('/', getAllUsers);
usersRouter.get('/me', getMyInfo);
// usersRouter.get('/', authJWT, getUser);
// usersRouter.get('/:id/avatar', getUserAvatar);
usersRouter.post('/', createUser);
usersRouter.put('/me', updateMe);

usersRouter.delete('/me', deleteMe);
usersRouter.get('/documents', getDocumentsWithJWT);

export { usersRouter };
