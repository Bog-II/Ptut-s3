import React from 'react';
import HeaderAppBar from '../components/appbar/MainAppBar';
import Editor from '../components/editor/Editor';
import './Docs.css';

const Docs = () => {
  return (
    <div>
      <HeaderAppBar />
      <Editor />
    </div>
  );
};

export default Docs;
