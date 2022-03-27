import { Button } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const AthentificationButton = () => {
  const { t, i18n } = useTranslation("forms");
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/authentification');
  }

  return (
    <Button variant="outlined" size="medium" onClick={handleClick}>
      {t('signIn')}
    </Button>
  )
}
