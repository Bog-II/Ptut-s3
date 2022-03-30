import { Container } from '@mui/material';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import MainAppBar from '../components/appBars/MainAppBar';
import { AuthentificationForm } from '../components/forms/AuthentificationForm';
import { AuthContext } from '../contexts/AuthContext';

const Authentification = () => {
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
        <AuthentificationForm />
      </Container >
    </>
  );
};

export default Authentification;
