import express from 'express';
import { createDocument, getAllDocuments } from '../controllers/document.controller';
import { authJWT } from '../verificators/jwt.verificators';
const documentsRouter = express.Router();

documentsRouter.post('/', authJWT, createDocument);
documentsRouter.get('/', getAllDocuments);

export { documentsRouter };
