import { Clear, Visibility, VisibilityOff } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Alert, Grid, IconButton, InputAdornment, Link, Snackbar, TextField } from '@mui/material'
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { signUpUser } from '../../api/auth.api';
import { getUserInformation } from '../../api/users.api';
import { isEmailValid } from '../../utils/Forms';

export const ProfileForm = () => {
  const { t, i18n } = useTranslation();

  // Form fields
  const [usernameValue, setUsernameValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');
  const [emailValue, setEmailValue] = useState<string>('');
  const [confirmPasswordValue, setConfirmPasswordValue] = useState<string>('');
  const showUserNameClearIcon = usernameValue != '';
  const showEmailClearIcon = emailValue != '';
  const showPasswordClearIcon = passwordValue != '';
  const showConfirmPasswordClearIcon = confirmPasswordValue != '';
  const [showPasswords, setShowPasswords] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const me = await getUserInformation()
      setUsernameValue(me.username);
      setEmailValue(me.email);
    })();
  }, [])


  const usernameValid = usernameValue != '';
  const passwordValid = (passwordValue == '') || (passwordValue.length >= 4);
  const emailValid = (emailValue == '') || isEmailValid(emailValue);
  const arePasswordsEqual = (confirmPasswordValue == '') || (passwordValue == confirmPasswordValue);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Snackbar
  const [showSnackbar, setShowSnackbar] = useState<boolean>(false);
  const [isSnackBarMessageSuccess, setIsSnackBarMessageSuccess] = useState<boolean>(false);
  const alertSnackBarSeverity = isSnackBarMessageSuccess ? 'success' : 'error';

  const oneSubmitButtonClicked = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (usernameValid && emailValid && passwordValid && arePasswordsEqual) {
      setIsLoading(true);
      try {
        await signUpUser(emailValue, usernameValue, passwordValue);
        setIsSnackBarMessageSuccess(true);
      } catch (error) {
        console.error(error);
        setIsSnackBarMessageSuccess(false);
      }
      setShowSnackbar(true);
      setIsLoading(false);
    }
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
        <h1>{t("profile")}</h1>
        <Box
          component="form"
          onSubmit={oneSubmitButtonClicked}
        >
          <Grid container sx={{ rowGap: "1em" }}>
            <Grid item xs={12} >
              <TextField
                required
                fullWidth
                label={t("username")}
                value={usernameValue}
                onChange={(e) => setUsernameValue(e.target.value)}
                color="primary"
                name="username"
                autoComplete="username"
                type="username"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {showUserNameClearIcon
                        ? <IconButton onClick={() => setUsernameValue('')}>
                          <Clear />
                        </IconButton>
                        : null
                      }
                    </InputAdornment>
                  ),
                }}
                autoFocus
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label={t("emailAdress")}
                color="primary"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
                name="email"
                autoComplete="email"
                type="email"
                helperText={emailValid ? '' : t("emailInvalid")}
                error={!emailValid}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {showEmailClearIcon
                        ? <IconButton onClick={() => setEmailValue('')}>
                          <Clear />
                        </IconButton>
                        : null
                      }
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>


            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label={t("password")}
                color="primary"
                type={showPasswords ? "text" : "password"}
                name="password"
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
                autoComplete="new-password"
                helperText={passwordValid ? '' : t("passwordLengthMinimum")}
                error={!passwordValid}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {showPasswordClearIcon
                        ? <IconButton onClick={() => setPasswordValue('')}>
                          <Clear />
                        </IconButton>
                        : null
                      }
                      <IconButton onClick={() => setShowPasswords(!showPasswords)}>
                        {showPasswords ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                value={confirmPasswordValue}
                label={t("password")}
                color="primary"
                type={showPasswords ? "text" : "password"}
                autoComplete="new-password"
                onChange={(e) => setConfirmPasswordValue(e.target.value)}
                error={!arePasswordsEqual}
                helperText={arePasswordsEqual ? t('confirmPassword') : t('passwordsNotEqual')}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {showConfirmPasswordClearIcon
                        ?
                        <IconButton onClick={() => setConfirmPasswordValue('')}>
                          <Clear />
                        </IconButton>
                        : null
                      }
                      <IconButton onClick={() => setShowPasswords(!showPasswords)}>
                        {showPasswords ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>


            <Grid item xs={6}>
              <LoadingButton
                variant="contained"
                type="submit"
                size="large"
                loading={isLoading}
              >
                {t("modify")}
              </LoadingButton>
            </Grid>

            <Grid item xs={6} sx={{
              display: 'flex',
              gap: "max(5px, 4%)",
              alignItem: "center",
              justifyContent: 'flex-end',
            }}>
              <LoadingButton
                variant="outlined"
                type="submit"
                size="small"
                color="error"
                loading={isLoading}
              >
                {t("deconnexion")}
              </LoadingButton>

              <LoadingButton
                variant="contained"
                type="submit"
                size="small"
                color="error"
                loading={isLoading}
              >
                {t("deleteAccount")}
              </LoadingButton>
            </Grid>

          </Grid>

        </Box>

      </Box>

      <Snackbar
        open={showSnackbar}
        autoHideDuration={6000}
        onClose={() => setShowSnackbar(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}>
        <Alert severity={alertSnackBarSeverity}>
          {isSnackBarMessageSuccess ? t('signUpSuccess') : t('signUpError')}
        </Alert>
      </Snackbar>
    </>
  )
}
