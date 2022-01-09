import React, { useRef, useState } from 'react';
import './CreateDocumentButton.css';

type Props = {
  onClickExecute: () => void;
};

const CreateDocumentButton: React.FC<Props> = ({ onClickExecute }) => {
  const documentNameRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<string>('');

  const onSubmitClick = async () => {
    const documentName = documentNameRef.current?.value;
    const jwt_token = localStorage.getItem('jwt_token');
    if (documentName == '') {
      setMessage('No document name provided');
      return;
    }

    if (jwt_token == null) {
      setMessage('No JWT token in storage');
      return;
    }

    const response = await fetch('http://localhost/api/documents/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        jwt_token: `${jwt_token}`,
      },
      body: JSON.stringify({
        documentName: documentName,
      }),
      mode: 'cors',
    });

    const json = await response.json();
    setMessage(JSON.stringify(json));
    onClickExecute();
  };

  return (
    <div className="create-document-form">
      <input type="text" ref={documentNameRef} placeholder="Document name" />
      <button onClick={onSubmitClick}>Créer document</button>
      {message}
    </div>
  );
};

export default CreateDocumentButton;
