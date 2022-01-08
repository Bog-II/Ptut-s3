import { Request, Response } from 'express';
import {
  createDocumentInDB,
  getAllDocumentsFromDB,
} from '../models/document.model';
import { isIdValid } from '../verificators/user.verificators';

export const getAllDocuments = (req: Request, res: Response) => {
  getAllDocumentsFromDB((err, documents) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(documents);
    }
  });
};

export const createDocument = (req: Request, res: Response) => {
  const { userId, documentName } = req.body;

  if (!isIdValid(userId)) {
    return res.status(400).send('Invalid userId');
  }

  createDocumentInDB(documentName, userId, (err, documentId) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send({
        documentId: documentId,
        message: 'Document successfully created',
      });
    }
  });
};
