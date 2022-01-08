import { Request, Response } from 'express';
import {
  createDocumentInDB,
  getAllDocumentsFromDB,
} from '../models/document.model';
import { isIdExisting } from '../verificators/user.verificators';

export const getAllDocuments = (req: Request, res: Response) => {
  getAllDocumentsFromDB((err, documents) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(documents);
    }
  });
};

export const createDocument = async (req: Request, res: Response) => {
  const { userId, documentName } = req.body;

  const isUserIdValid = await isIdExisting(userId);
  if (!isUserIdValid) {
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
