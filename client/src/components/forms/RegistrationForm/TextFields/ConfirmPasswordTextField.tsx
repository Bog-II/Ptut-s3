import { Clear, Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

export const ConfirmPasswordTextField = () => {
  const { t, i18n } = useTranslation('forms');

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  const handleIconPasswordClick = () => {
    setShowPassword(!showPassword);
  }

  const handleClearInput = () => {
    setValue('');
  }

  const showClearIcon = value === "" ? false : true;

  return (
    <TextField
      required
      fullWidth
      value={value}
      label={t("password")}
      color="primary"
      type={showPassword ? "text" : "password"}
      helperText={t("confirmPassword")}
      autoComplete="new-password"
      onChange={(e) => setValue(e.target.value)}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {showClearIcon
              ?
              <IconButton onClick={handleClearInput}>
                <Clear />
              </IconButton>
              : null
            }
            <IconButton onClick={handleIconPasswordClick}>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  )
}
