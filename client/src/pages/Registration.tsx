import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Registration.css';

const Registration = () => {
  const username = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const confirmedPassword = useRef<HTMLInputElement>(null);

  const [messageToDisplay, setMessageToDisplay] = useState('');

  const onSubmitClick = async () => {
    const passwordVal = password?.current?.value;
    const confirmedPasswordVal = confirmedPassword?.current?.value;
    if (passwordVal != confirmedPasswordVal) {
      setMessageToDisplay('Password and confirmed password do not match');
      return;
    }
    setMessageToDisplay('');

    const emailVal = email?.current?.value;
    const usernameVal = username?.current?.value;

    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        userName: usernameVal,
        email: emailVal,
        password: passwordVal,
      }),
      mode: 'cors',
    });
    console.log(response);

    const json = await response.json();
    setMessageToDisplay(JSON.stringify(json));
    console.log(json);
  };

  return (
    <div className="registration">
      <header>
        <div className="header">
          <h3>
            Already have an account ?
            <Link to={'/Authentification'}>Authentification</Link>
          </h3>
        </div>
      </header>
      <div className="registration-form">
        <h1>Registration</h1>

        <div className="input-field">
          <label>Username :</label>
          <input type="text" ref={username} required />
        </div>

        <div className="input-field">
          <label>Adresse mail :</label>
          <input type="email" ref={email} required />
        </div>

        <div className="input-field">
          <label>Mot-de-passe :</label>
          <input type="password" ref={password} required />
        </div>

        <div className="input-field">
          <label>Confirmation du mot-de-passe :</label>
          <input type="password" ref={confirmedPassword} required />
        </div>

        <input type="submit" value="Envoyer" onClick={onSubmitClick} />

        {messageToDisplay}
      </div>
    </div>
  );
};

export default Registration;
