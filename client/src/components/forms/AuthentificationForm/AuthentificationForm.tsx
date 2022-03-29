import { Box, Grid, Link } from '@mui/material'
import React, { FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { FormButton } from '../FormButton'
import { IdTextField } from './TextFields/IdTextField'
import { PasswordTextField } from './TextFields/PasswordTextField'
import { useNavigate } from 'react-router-dom'

export const AuthentificationForm = () => {
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();

  const handleLinkClick = () => {
    navigate('/registration');
  }

  const oneSubmitButtonClicked = (event: FormEvent) => {
    event.preventDefault();
    console.log('clicked')
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: 'min(95%, 700px)',
          m: 'max(8%, 20px)',
        }}
      >
        <h1>{t("signIn")}</h1>
        <Box component="form"
          onSubmit={oneSubmitButtonClicked}
        >
          <Grid container sx={{ rowGap: "1em" }}>
            <Grid item xs={12} >
              <IdTextField />
            </Grid>

            <Grid item xs={12}>
              <PasswordTextField />
            </Grid>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link onClick={handleLinkClick}>
                  {t('doNotHaveAnAccount')}
                </Link>
              </Grid>
            </Grid>
          </Grid>

          <FormButton>
            {t("signIn")}
          </FormButton>
        </Box>
      </Box>
    </>
  )
}
