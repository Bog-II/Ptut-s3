import React from 'react';
import Editor from '../components/Editor';
import Logo from '../components/Logo';
import './Docs.css';

const Docs = () => {
  return (
    <div>
      <div className="editor-header">
        <Logo />
        <h1 className="document-title">{document.title}</h1>
      </div>
      <Editor></Editor>
    </div>
  );
};

export default Docs;
