import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom';
import Authentification from './pages/Authentification';
import Docs from './pages/Docs';
import Home from './pages/Home';
import Registration from './pages/Registration';
import { v4 } from 'uuid';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Redirect to={`/docs/${v4()}`} /> */}
        <Route path="/docs/:id" element={<Docs />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/authentification" element={<Authentification />} />
        <Route path="/share/:id" element={''} />

        <Route path="*" element={<Navigate to='/' />} />
      </Routes>
    </Router>
  );
}
