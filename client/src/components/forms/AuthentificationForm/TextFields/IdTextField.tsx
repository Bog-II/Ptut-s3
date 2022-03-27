import { Clear } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

export const IdTextField = () => {
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
      label={t("userNameOrEmail")}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      color="primary"
      name="username"
      autoComplete="username"
      type="username"
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
      autoFocus
    />
  )
}
