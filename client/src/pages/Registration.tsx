import { Container } from '@mui/material';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import MainAppBar from '../components/appBars/MainAppBar';
import { RegistrationForm } from '../components/forms/AuthentificationForm/RegistrationForm';

const Registration = () => {
  return (
    <>
      <MainAppBar />

      <Container sx={{
        display: "flex",
        justifyContent: "center",
      }}>
        <RegistrationForm />
      </Container>
    </>
  );
};

export default Registration;
