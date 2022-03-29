import { Clear } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

export const IdTextField = () => {
  const { t, i18n } = useTranslation();

  const [value, setValue] = useState<string>('');

  const handleClearInput = () => {
    setValue('');
  }

  const showClearIcon = value === "" ? false : true;

  return (
    <></>
  )
}
