import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import {
  createDocumentInDB,
  getAllDocumentsFromDB,
  getDocumentsByUserId,
} from '../models/document.model';
import { JWT_TOKEN, RequestWithId } from '../verificators/jwt.verificators';
import { isUserIdExisting } from '../verificators/user.verificators';

export const getAllDocuments = (req: Request, res: Response) => {
  getAllDocumentsFromDB((err, documents) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(documents);
    }
  });
};

export const createDocument = async (req: RequestWithId, res: Response) => {
  const { documentName } = req.body;
  const userId = req.id;

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

export const getDocumentsWithJWT = async (
  req: RequestWithId,
  res: Response
) => {
  getDocumentsByUserId(req.id, (err, documents) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(documents);
    }
  });
};
