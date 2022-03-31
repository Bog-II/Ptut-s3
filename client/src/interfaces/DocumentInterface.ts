interface DocumentInterface {
  id: string;
  documentName: string;
  documentCreatorId: string;
  creationDate: Date;
  lastModificationTime: Date;
  documentSize: number;
}

export type { DocumentInterface };
