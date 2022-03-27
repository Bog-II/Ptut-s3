import { Container } from '@mui/material';
import { DataGridPro } from '@mui/x-data-grid-pro';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderAppBar from '../components/appbar/MainAppBar';
import CreateDocumentButton from '../components/CreateDocumentButton';
import { columns } from '../components/documents/DocumentsDataGridActions';
import { DocumentsDataGrid } from '../components/documents/DocumentsDataGrid';
import { documentsData } from '../data/documentsDataGrid';
import './Home.css';


interface document {
  _id: string;
  documentName: string;
  creationDate: string;
  lastModificationDate: string;
}

const Home = () => {
  const [documents, setDocuments] = useState<document[]>([]);
  const jwt_token = localStorage.getItem('jwt_token');

  const fetchDocuments = async () => {
    if (jwt_token == null) {
      return;
    }

    fetch('/api/users/documents', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        jwt_token: `${jwt_token}`,
      },
      mode: 'cors',
    }).then((response) => {
      response.json().then((json) => {
        setDocuments(json);
      });
    });
  };

  useEffect(() => {
    fetchDocuments();
  }, []);

  if (jwt_token == null) {
    return (
      <div className="home">
        <h1>Home Page</h1>
        <Link to={'/registration'}>
          <h2>Registration</h2>
        </Link>

        <Link to={'/authentification'}>
          <h2>Log in</h2>
        </Link>
      </div>
    );
  }

  return (
    <div className="home">
      <HeaderAppBar />
      <h1>Home Page</h1>

      <CreateDocumentButton onClickExecute={fetchDocuments} />

      <DocumentsDataGrid />

      <div className="documents-section">
        <h2>Documents</h2>

        <ul className="documents">
          {documents.map(
            ({
              _id,
              documentName,
              creationDate,
              lastModificationDate,
            }: document) => {
              const documentEndPoint = `/docs/${_id}`;
              const lastUpdatedate = new Date(lastModificationDate);
              const date = lastUpdatedate.getDate();
              const month = lastUpdatedate.getMonth() + 1;
              const year = lastUpdatedate.getFullYear();
              const hour = lastUpdatedate.getHours();
              const minute = lastUpdatedate.getMinutes();

              return (
                <li key={_id} className="document">
                  <span>
                    {/* <a href={documentEndPoint} target="_blank">
                      {documentName}
                    </a> */}
                    <Link to={documentEndPoint} target="_blank">
                      {documentName}
                    </Link>
                  </span>
                  <span>{`${_id}`}</span>
                  <span>{`${hour}h${minute}  -  ${date}/${month}/${year}`}</span>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </div>
  );
};

export default Home;
