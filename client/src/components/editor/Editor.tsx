import React, { useCallback, useContext, useEffect, useState } from 'react';
import Quill, { EventEmitter, TextChangeHandler } from 'quill';
import 'quill/dist/quill.snow.css';
import './Editor.css';
import { io, Socket } from 'socket.io-client';
import { useParams } from 'react-router';
import { ThemeModeContext } from '../../contexts/ThemeModeContext';

const saveInterval = 2000;

const Editor = () => {
  const { id: docId } = useParams<string>();
  const [socket, setSocket] = useState<Socket>();
  const [quill, setQuill] = useState<Quill>();

  const ThemeMode = useContext(ThemeModeContext);

  const prevThemeMode = ThemeMode.themeMode;
  ThemeMode.setThemeMode('light');

  // on component mount, we initialize the socket
  useEffect(() => {
    setSocket(io('http://localhost:3001'));

    console.log(docId);

    const cleanup = () => {
      console.log(socket);
      console.log(docId);
      if (socket) {
        socket.disconnect();
      }
      ThemeMode.setThemeMode(prevThemeMode)
    }

    window.addEventListener('beforeunload', cleanup);

    // on component unmount, we disconnect the socket and reset theme 
    return () => {
      window.removeEventListener('beforeunload', cleanup);
      cleanup();
    }

  }, []);

  // we give our document id to the server to get attached to a room accordingly
  useEffect(() => {
    if (socket == null || quill == null) return;

    socket.once('load-document', (content, documentName) => {
      document.title = documentName;
      quill.setContents(content);
      quill.enable();
    });

    socket.emit('get-document', docId, 'userId');
  }, [socket, quill, docId]);

  // when server is broadcasting changes we apply them
  useEffect(() => {
    if (quill == null || socket == null) return;

    const handler: TextChangeHandler = (delta) => {
      console.log('delta : ' + delta);
      quill.updateContents(delta);
    };

    socket?.on('receive-changes', handler);

    return () => {
      socket?.off('receive-changes', handler);
    };
  }, [quill, socket]);

  // on text changes in quill, we send those changes to the socket
  useEffect(() => {
    if (quill == null || socket == null) return;
    const handler: TextChangeHandler = (delta, oldDelta, source) => {
      if (source !== 'user') return;
      socket?.emit('send-changes', delta);
    };

    quill?.on('text-change', handler);

    return () => {
      quill?.off('text-change', handler);
    };
  }, [quill, socket]);

  useEffect(() => {
    if (socket == null || quill == null) return;

    const interval = setInterval(() => {
      socket.emit('save-document', quill.getContents());
    }, saveInterval);

    return () => {
      clearInterval(interval);
    };
  }, [quill, socket]);

  const wrapperRef = useCallback((wrapper) => {
    const toolbarOptions = [
      [
        { header: [1, 2, 3, 4, 5, 6, false] },
        { size: ['small', false, 'large', 'huge'] },
      ],
      ['bold', 'italic', 'underline', 'strike'],
      [{ color: [] }, { background: [] }, 'image', 'link'],
      [
        { align: '' },
        { align: 'center' },
        { align: 'right' },
        { align: 'justify' },
      ],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['blockquote', 'code-block'],
      [{ script: 'sub' }, { script: 'super' }],
      [{ direction: 'rtl' }],
      ['clean'],
    ];
    if (wrapper == null) return;
    wrapper.innerHTML = '';
    const editor = document.createElement('div');
    wrapper.append(editor);
    const q = new Quill(editor, {
      theme: 'snow',
      modules: {
        toolbar: toolbarOptions,
      },
      readOnly: false,
    });

    q.disable();

    q.setText('Loading ...');

    setQuill(q);
  }, []);

  return (
    <div className="container" ref={wrapperRef}></div>
  );
};

export default Editor;
