import Document from '../schemas/Document';
import { v4 as uuidv4 } from 'uuid';

export const getAllDocumentsFromDB = (
  callback: (err: Error | null, res: any) => void
) => {
  Document.find({}, (errQuery, documents) => {
    if (errQuery) {
      callback(errQuery, []);
    } else {
      callback(null, documents);
    }
  });
};

export const createDocumentInDB = (
  documentName: string,
  userId: string,
  callback: (err: Error | null, res: any) => void
) => {
  const document = {
    _id: uuidv4(),
    data: {},
    documentName: documentName,
    users: [{ userId: userId, role: 1 }],
    creationDate: Date.now(),
    lastModificationDate: Date.now(),
  };

  Document.create(document, (errQuery, document) => {
    if (errQuery) {
      callback(errQuery, null);
    } else {
      callback(null, document._id);
    }
  });
};
