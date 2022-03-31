interface DocumentInterface {
  id: string;
  documentName: string;
  documentCreatorId: number;
  creationDate: Date;
  lastModificationTime: Date;
  documentSize: number;
}

export type { DocumentInterface };
