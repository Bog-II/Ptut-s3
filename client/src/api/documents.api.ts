export const getUserDocuments = async () => {
  const response = await fetch('/api/documents/me', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    const json = await response.json();
    return json;
  }

  throw new Error('Error while getting user documents');
};

export const createNewDocument = async (documentName: string) => {
  const response = await fetch('/api/documents', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      documentName: documentName,
    }),
  });

  if (response.ok) {
    const json = await response.json();
    return json;
  }

  throw new Error('Error while creating new document');
};

export const renameDocument = async (documentId: string) => {};
