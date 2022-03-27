import { Grid } from '@mui/material'
import { Box } from '@mui/system';
import { useTranslation } from 'react-i18next';
import { AlreadyHaveAccountButton } from './AlreadyHaveAccountButton';
import { SubmitButton } from './SubmitButton';
import { ConfirmPasswordTextField } from './TextFields/ConfirmPasswordTextField';
import { EmailAdressTextField } from './TextFields/EmailAdressTextField';
import { PasswordTextField } from './TextFields/PasswordTextField';
import { UsernameTextField } from './TextFields/UsernameTextField';

export const RegistrationForm = () => {
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
        <h1>{t("signUp")}</h1>
        <Box component="form" method="POST" action="/register">
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

            <SubmitButton />
          </Grid>
        </Box>
      </Box>
    </>
  )
}
