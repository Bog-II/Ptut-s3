import React from 'react';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';
import './Authentification.css';

const Authentification = () => {
  return (
    <div className="autentification">
      <header>
        <div className="header">
          <h3>
            <Logo />
            Don't have an account ?
            <Link to={'/Registration'}>Registration</Link>
          </h3>
        </div>
      </header>

      <h1>Authentification</h1>
      <div className="fieldBox">
        <form action='/login'>
          <div>
            <label> Username ou Email:</label>
            <input type="text" name="pseudo" required />
          </div>

          <div>
            <label> Mot-de-passe:</label>
            <input type="password" name="password" required />
          </div>

          <br />
          <input type="submit" value="Envoyer" name="authentificate" />
        </form>
      </div>
    </div>
  );
};

export default Authentification;
