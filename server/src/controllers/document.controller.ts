import { Request, Response } from 'express';
import {
  createDocumentInDB,
  getAllDocumentsFromDB,
  getDocumentsByUserId,
} from '../models/document.model';
import { RequestWithUserId } from '../verificators/jwt.verificators';

export const getAllDocuments = (req: Request, res: Response) => {
  getAllDocumentsFromDB((err, documents) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(documents);
    }
  });
};

export const createDocument = (req: RequestWithUserId, res: Response) => {
  const { documentName } = req.body;
  const { userId } = req;

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

export const getUserDocuments = (req: RequestWithUserId, res: Response) => {
  const { userId } = req;
  getDocumentsByUserId(userId, (err, documents) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(documents);
    }
  });
};

export const getDocumentsWithJWT = (req: RequestWithUserId, res: Response) => {
  getDocumentsByUserId(req.userId, (err, documents) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(documents);
    }
  });
};
