import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { EditorAppBar } from '../components/appBars/EditorAppBar';
import Editor from '../components/editor/Editor';
import { AuthContext } from '../contexts/AuthContext';
import './Docs.css';

const Docs = () => {
  const authContext = useContext(AuthContext);

  console.log(authContext);

  if (!authContext.isLogged) {
    return <Navigate to='/' />
  }

  return (
    <>
      <EditorAppBar />
      <Editor />
    </>
  );
};

export default Docs;
