import { Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

export const LogoButton = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  }

  return (
    <Typography variant="h6" component="div" onClick={handleLogoClick} sx={{ flexGrow: 1 }}>
      <Button onClick={handleLogoClick} size='large'>
        OpenDocs
      </Button>
    </Typography>
  )
}
