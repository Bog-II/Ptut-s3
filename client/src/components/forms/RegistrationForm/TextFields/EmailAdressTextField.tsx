import { Clear } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

export const EmailAdressTextField = () => {
  const { t, i18n } = useTranslation('forms');

  const [value, setValue] = useState<string>('');

  const handleClearInput = () => {
    setValue('');
  }

  const showClearIcon = value === "" ? false : true;

  return (
    <TextField
      required
      fullWidth
      label={t("emailAdress")}
      color="primary"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      name="email"
      autoComplete="email"
      type="email"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {showClearIcon
              ? <IconButton onClick={handleClearInput}>
                <Clear />
              </IconButton>
              : null
            }
          </InputAdornment>
        ),
      }}
    />
  )
}
