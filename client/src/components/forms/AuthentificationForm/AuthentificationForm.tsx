import { Box, Grid } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { DoNotHaveAnAccount } from './DoNotHaveAnAccount'
import { SubmitButton } from './SubmitButton'
import { IdTextField } from './TextFields/IdTextField'
import { PasswordTextField } from './TextFields/PasswordTextField'

export const AuthentificationForm = () => {
  const { t, i18n } = useTranslation('forms');

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
        <Box component="form" method="POST" action='/login' >
          <Grid container sx={{ rowGap: "1em" }}>
            <Grid item xs={12} >
              <IdTextField />
            </Grid>

            <Grid item xs={12}>
              <PasswordTextField />
            </Grid>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <DoNotHaveAnAccount />
              </Grid>
            </Grid>
          </Grid>

          <SubmitButton />
        </Box>
      </Box>
    </>
  )
}
