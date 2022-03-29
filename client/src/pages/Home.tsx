import { Container } from '@mui/material';
import { DataGridPro } from '@mui/x-data-grid-pro';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderAppBar from '../components/appBars/MainAppBar';
import { DocumentsDataGrid } from '../components/documents/DocumentsDataGrid';
import { WelcomeCard } from '../components/WelcomeCard';
import { AuthContext } from '../contexts/AuthContext';

const Home = () => {
  const authContext = useContext(AuthContext);

  return (
    <>
      <HeaderAppBar />
      <Container sx={{
        display: "flex",
        justifyContent: "center",
      }}>
        {authContext.isLogged ? <DocumentsDataGrid /> : <WelcomeCard />}
      </Container >
    </>
  );
};

export default Home;
