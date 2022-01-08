import express from 'express';
import { createDocument, getAllDocuments } from '../controllers/document.controller';
const documentsRouter = express.Router();

documentsRouter.post('/', createDocument);
documentsRouter.get('/', getAllDocuments);

export { documentsRouter };
