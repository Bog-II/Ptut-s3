import { Alert, Box, Grid, IconButton, InputAdornment, Link, Snackbar, TextField } from '@mui/material'
import React, { FormEvent, useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { Clear, Visibility, VisibilityOff } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { isEmailValid } from '../../../utils/Forms'
import { signInUserWithEmail, signInUserWithUsername } from '../../../api/auth.api'
import { AuthContext } from '../../../contexts/AuthContext'

export const AuthentificationForm = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const authContext = useContext(AuthContext);

  // Form fields
  const [usernameOrEmailValue, setUsernameOrEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const passwordValid = (passwordValue == '') || (passwordValue.length >= 4);
  const showIdClearIcon = usernameOrEmailValue != '';
  const showPasswordClearIcon = passwordValue != '';

  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Snackbar
  const [showSnackbar, setShowSnackbar] = useState<boolean>(false);
  const [isSnackBarMessageSuccess, setIsSnackBarMessageSuccess] = useState<boolean>(false);
  const alertSnackBarSeverity = isSnackBarMessageSuccess ? 'success' : 'error';

  const handleLinkClick = () => {
    navigate('/registration');
  }

  const oneSubmitButtonClicked = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    const isValueEmail = isEmailValid(usernameOrEmailValue);
    try {
      if (isValueEmail) {
        await signInUserWithEmail(usernameOrEmailValue, passwordValue);
      } else {
        await signInUserWithUsername(usernameOrEmailValue, passwordValue);
      }
      setIsSnackBarMessageSuccess(true);
      authContext.setIsLogged(true);
      
      navigate('/');
    } catch (error) {
      console.error(error);
      setIsSnackBarMessageSuccess(false);
    }
    setShowSnackbar(true);
    setIsLoading(false);
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
              <TextField
                required
                fullWidth
                label={t("usernameOrEmail")}
                value={usernameOrEmailValue}
                onChange={(e) => setUsernameOrEmailValue(e.target.value)}
                color="primary"
                name="username"
                autoComplete="username"
                type="username"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {showIdClearIcon
                        ? <IconButton onClick={() => setUsernameOrEmailValue('')}>
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
                label={t("password")}
                color="primary"
                type={showPassword ? "text" : "password"}
                name="password"
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
                autoComplete="current-password"
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
                      <IconButton onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link onClick={handleLinkClick}>
                  {t('doNotHaveAnAccount')}
                </Link>
              </Grid>
            </Grid>
          </Grid>


          <LoadingButton
            variant="contained"
            type="submit"
            size="large"
            loading={isLoading}
          >
            {t("signIn")}
          </LoadingButton>
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
          {isSnackBarMessageSuccess ? t('signInSuccess') : t('signInError')}
        </Alert>
      </Snackbar>
    </>
  )
}
