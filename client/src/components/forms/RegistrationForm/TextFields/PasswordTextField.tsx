import { Clear, Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

export const PasswordTextField = () => {
  const { t, i18n } = useTranslation();

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
      label={t("password")}
      color="primary"
      type={showPassword ? "text" : "password"}
      name="password"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      autoComplete="new-password"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {showClearIcon
              ? <IconButton onClick={handleClearInput}>
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
