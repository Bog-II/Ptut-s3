import { Button } from '@mui/material';
import React from 'react'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const RegistrationButton = () => {
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/registration');
  }

  return (
    <Button variant="contained" size="medium" onClick={handleSignInClick}>
      {t('signUp')}
    </Button>
  )
}
