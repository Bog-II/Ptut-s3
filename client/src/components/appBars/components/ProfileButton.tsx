import { AccountCircle } from '@mui/icons-material'
import { IconButton, Tooltip } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const ProfileButton = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const tooltipText = t('profile');

  const handleProfileButtonClick = () => {
    navigate('/profile');
  }

  return (
    <Tooltip title={tooltipText}>
      <IconButton onClick={handleProfileButtonClick}>
        <AccountCircle fontSize="large" />
      </IconButton>
    </Tooltip>
  )
}
