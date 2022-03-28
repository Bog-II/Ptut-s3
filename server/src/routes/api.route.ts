import express from 'express';
import { authJWT } from '../verificators/jwt.verificators';
import { authRouter } from './auth.route';
import { documentsRouter } from './document.route';
import { usersRouter } from './users.route';

// Main Router
const apiRouter = express.Router();

// Middlewares
apiRouter.use(express.urlencoded());
apiRouter.use(express.json());

// Sub Routers
apiRouter.use('/users', authJWT, usersRouter);
apiRouter.use('/documents', authJWT, documentsRouter);
apiRouter.use('/auth', authRouter);

export { apiRouter };
