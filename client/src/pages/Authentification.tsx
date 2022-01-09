import React, { useRef, useState } from 'react';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';
import './Authentification.css';

const Authentification = () => {
  const password = useRef<HTMLInputElement>(null);
  const emailOrPasword = useRef<HTMLInputElement>(null);
  const [jwt, setJWT] = useState<string>('');

  const onSubmitClick = async () => {
    console.log(password?.current?.value);

    const passwordVal = password?.current?.value;
    const emailOrPaswordVal = emailOrPasword?.current?.value;

    // const response = await fetch('http://localhost/api/auth/login', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email: emailOrPaswordVal,
    //     password: passwordVal,
    //   }),
    //   mode: 'no-cors',
    // });

    fetch('http://localhost/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        email: emailOrPaswordVal,
        password: passwordVal,
      }),
      mode: 'no-cors',
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    // const data = await response.json();
    // console.log(data);
  };

  return (
    <div className="autentification">
      <header>
        <div className="header">
          <Logo />
          <h3>
            Don't have an account ?
            <Link to={'/Registration'}>Registration</Link>
          </h3>
        </div>
      </header>

      <h1>Authentification</h1>

      <div className="form-authentification">
        <div className="input-field">
          <label>Username ou Email:</label>
          <input type="text" ref={emailOrPasword} required />
        </div>

        <div className="input-field">
          <label>Mot-de-passe:</label>
          <input type="password" ref={password} required />
        </div>

        <input type="submit" onClick={onSubmitClick} />
      </div>
      {/* 
      <div>
        {(jwt != '') ? jwt : }
      </div> */}
    </div>
  );
};

export default Authentification;
