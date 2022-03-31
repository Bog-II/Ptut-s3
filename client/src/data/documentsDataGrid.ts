import { DocumentInterface } from '../interfaces/DocumentInterface';

export const documentsData: DocumentInterface[] = [
  {
    id: '1',
    documentName: 'Document 1',
    documentCreatorId: '11',
    creationDate: new Date(),
    lastModificationTime: new Date(),
    documentSize: 123,
  },
  {
    id: '2',
    documentName: 'Document 2',
    documentCreatorId: '22',
    creationDate: new Date(),
    lastModificationTime: new Date(),
    documentSize: 1234,
  },
  {
    id: '3',
    documentName: 'Document 3',
    documentCreatorId: '33',
    creationDate: new Date(),
    lastModificationTime: new Date(),
    documentSize: 4561,
  },
  {
    id: '4',
    documentName: 'Document 4',
    documentCreatorId: '44',
    creationDate: new Date(),
    lastModificationTime: new Date(),
    documentSize: 4512,
  },
];
