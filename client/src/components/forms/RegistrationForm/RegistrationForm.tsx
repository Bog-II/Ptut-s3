import { Clear, Visibility, VisibilityOff } from '@mui/icons-material'
import { Button, Grid, IconButton, InputAdornment, TextField } from '@mui/material'
import { Box } from '@mui/system';
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { AlreadyHaveAccountButton } from './AlreadyHaveAccountButton';
import { ConfirmPasswordTextField } from './TextFields/ConfirmPasswordTextField';
import { EmailAdressTextField } from './TextFields/EmailAdressTextField';
import { PasswordTextField } from './TextFields/PasswordTextField';
import { UsernameTextField } from './TextFields/UsernameTextField';

export const RegistrationForm = () => {
  const { t, i18n } = useTranslation('forms');

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleIconPasswordClick = () => {
    setShowPassword(!showPassword);
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: 'min(95%, 700px)'
        }}
      >
        <h1>{t("signUp")}</h1>
        <Box component="form" method="POST">
          <Grid container sx={{ rowGap: "1em" }}>
            <Grid item xs={12} >
              <UsernameTextField />
            </Grid>

            <Grid item xs={12}>
              <EmailAdressTextField />
            </Grid>


            <Grid item xs={12}>
              <PasswordTextField />
            </Grid>

            <Grid item xs={12}>
              <ConfirmPasswordTextField />
            </Grid>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <AlreadyHaveAccountButton />
              </Grid>
            </Grid>


            <Button variant="contained" type="submit" size="large"  >
              {t("signUp")}
            </Button>

          </Grid>
        </Box>
      </Box>
    </>
  )
}
