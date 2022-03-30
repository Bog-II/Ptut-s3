import { Container } from '@mui/material';
import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import MainAppBar from '../components/appBars/MainAppBar';
import { ProfileForm } from '../components/forms/ProfileForm';
import { AuthContext } from '../contexts/AuthContext';

export const Profile = () => {
  const authContext = useContext(AuthContext);
  if (!authContext.isLogged) {
    return <Navigate to='/' />
  }

  return (
    <>
      <MainAppBar />

      <Container sx={{
        display: "flex",
        justifyContent: "center",
      }}>
        <ProfileForm />
      </Container>
    </>
  )
}
