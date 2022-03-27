import { Container } from '@mui/material';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import MainAppBar from '../components/appbar/MainAppBar';
import { AuthentificationForm } from '../components/forms/AuthentificationForm/AuthentificationForm';

const Authentification = () => {
  // const password = useRef<HTMLInputElement>(null);
  // const emailOrUsername = useRef<HTMLInputElement>(null);
  // const [jwt, setJWT] = useState<string>('');

  // const onSubmitClick = async () => {
  //   console.log(password?.current?.value);

  //   const passwordVal = password?.current?.value;
  //   const emailOrUsernameVal = emailOrUsername?.current?.value;

  //   const response = await fetch('/api/auth/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json',
  //     },
  //     body: JSON.stringify({
  //       emailOrUsername: emailOrUsernameVal,
  //       password: passwordVal,
  //     }),
  //     mode: 'cors',
  //   });
  //   const json = await response.json();
  //   const jwt = json.token;
  //   console.log(jwt);
  //   setJWT(jwt);
  //   localStorage.setItem('jwt_token', jwt);
  // };

  return (
    <>
      <MainAppBar />

      <Container sx={{
        display: "flex",
        justifyContent: "center",
      }}>
        <AuthentificationForm />
      </Container >
    </>
  );
};

export default Authentification;
