import { Clear, Visibility, VisibilityOff } from '@mui/icons-material'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

export const RegistrationForm = () => {
  const { t, i18n } = useTranslation('forms');

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [passwordValue, setPasswordValue] = useState<string>('');

  const handleIconPasswordClick = () => {
    setShowPassword(!showPassword);
  }

  return (
    <>
      <h1>{t("signUp")}</h1>

      <TextField
        id="standard-basic"
        label={t("userName")}
        color="primary"
        type="text"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {/* {documentContext.searchBarValue != '' ? (
                <IconButton onClick={onValueClear}>
                  <Clear />
                </IconButton>
              ) : null} */}
              <IconButton>
                <Clear />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <TextField
        id="standard-basic"
        label={t("emailAdress")}
        color="primary"
        type="email"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {/* {documentContext.searchBarValue != '' ? (
                <IconButton onClick={onValueClear}>
                  <Clear />
                </IconButton>
              ) : null} */}
              <IconButton>
                <Clear />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <TextField
        id="standard-basic"
        label={t("password")}
        color="primary"
        type={showPassword ? "text" : "password"}
        autoComplete="on"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {/* {documentContext.searchBarValue != '' ? (
                <IconButton onClick={onValueClear}>
                  <Clear />
                </IconButton>
              ) : null} */}
              <IconButton>
                <Clear />
              </IconButton>
              <IconButton onClick={handleIconPasswordClick}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <TextField
        id="standard-basic"
        label={t("confirmPassword")}
        color="primary"
        type={showPassword ? "text" : "password"}
        autoComplete="on"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {/* {documentContext.searchBarValue != '' ? (
                <IconButton onClick={onValueClear}>
                  <Clear />
                </IconButton>
              ) : null} */}
              <IconButton>
                <Clear />
              </IconButton>
              <IconButton onClick={handleIconPasswordClick}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </>
  )
}
