import express from 'express';
import { documentsRouter } from './document.route';
import { usersRouter } from './users.route';

// Main Router
const apiRouter = express.Router();

// Middlewares
apiRouter.use(express.urlencoded());
apiRouter.use(express.json());

// Sub Routers
apiRouter.use('/users', usersRouter);
apiRouter.use('/documents', documentsRouter);

export { apiRouter };
