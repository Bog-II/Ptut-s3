import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const WelcomeCard = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  return (
    <Container sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      rowGap: 'max(10%, 20px)',
      margin: 'max(20%, 20px) max(5%, 10px)',
    }}>

      <Typography variant="h1" component="h1">
        {t('welcomeTitle')}
      </Typography>


      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 'max(5%, 10px)',
        width: '80%',
      }}>
        <Button
          fullWidth
          variant="outlined"
          size="large"
          onClick={() => navigate('/authentification')}>
          {t('signIn')}
        </Button>

        <Button
          fullWidth
          variant="contained"
          size="large"
          onClick={() => navigate('/registration')}>
          {t('signUp')}
        </Button>
      </Box>
    </Container>
  )
}
