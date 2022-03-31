import express from 'express';
import {
  createDocument,
  getAllDocuments,
  getUserDocuments,
} from '../controllers/document.controller';
const documentsRouter = express.Router();

documentsRouter.post('/', createDocument);
documentsRouter.get('/', getAllDocuments);
documentsRouter.get('/me', getUserDocuments);

export { documentsRouter };
