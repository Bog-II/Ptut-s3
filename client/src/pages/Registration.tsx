import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import './Registration.css';

const Registration = () => {
  var formField = {
    justifyContent: 'center',
    fontSize: 25,
  };
  return (
    <div>
      <header>
        <div className="header">
          <h3>
            <Logo />
            Already have an account ?
            <Link to={'/Authentification'}>Authentification</Link>
          </h3>
        </div>
      </header>
      <div className="registration">
        <h1>Registration</h1>
        <div className="fieldBox">
          <form style={formField} className="formBox	">
            <label>
              Nom :
              <input type="text" name="name" required />
            </label>
            <br />
            <label>
              Prenom :
              <input type="text" name="firstname" required />
            </label>
            <br />
            <label>
              Pseudo :
              <input type="text" name="pseudo" required />
            </label>
            <br />
            <label>
              Adresse mail :
              <input type="text" name="email" required />
            </label>
            <br />
            <label>
              Mot-de-passe :
              <input type="password" name="password" required />
            </label>
            <br />
            <label>
              confirmation mot-de-passe :
              <input type="password" name="confirm_password" required />
            </label>
            <br />
            <input type="submit" value="Envoyer" name="register" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
