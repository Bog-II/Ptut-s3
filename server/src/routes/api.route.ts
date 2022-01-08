import express from 'express';
import { usersRouter } from './users.route';

// Main Router
const apiRouter = express.Router();

// Middlewares
apiRouter.use(express.urlencoded());
apiRouter.use(express.json());

// Sub Routers
apiRouter.use('/users', usersRouter);

export { apiRouter };
