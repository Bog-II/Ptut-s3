import { Container } from '@mui/material';
import React, { useContext, useRef, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import MainAppBar from '../components/appBars/MainAppBar';
import { RegistrationForm } from '../components/forms/RegistrationForm';
import { AuthContext } from '../contexts/AuthContext';

const Registration = () => {
  const authContext = useContext(AuthContext);
  if (authContext.isLogged) {
    return <Navigate to='/' />
  }

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
