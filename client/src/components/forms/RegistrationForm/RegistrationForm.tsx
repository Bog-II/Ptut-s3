import { Clear, Visibility, VisibilityOff } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Alert, Button, Grid, IconButton, InputAdornment, Link, Snackbar, TextField } from '@mui/material'
import { Box } from '@mui/system';
import { FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { isEmailValid } from '../../../utils/Forms';
import { FormButton } from '../FormButton';

export const RegistrationForm = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

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

  const usernameValid = usernameValue != '';
  const passwordValid = (passwordValue == '') || (passwordValue.length >= 4);
  const emailValid = (emailValue == '') || isEmailValid(emailValue);
  const arePasswordsEqual = (confirmPasswordValue == '') || (passwordValue == confirmPasswordValue);

  const [isLoading, setIsLoading] = useState(false);

  const handleLinkClick = () => {
    navigate('/authentification');
  }

  const oneSubmitButtonClicked = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (usernameValid && emailValid && passwordValid && arePasswordsEqual) {
      console.log('clicked');

      setIsLoading(true);
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
        <h1>{t("signUp")}</h1>
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

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link onClick={handleLinkClick}>
                  {t('alreadyHaveAnAccount')}
                </Link>
              </Grid>
            </Grid>


            <LoadingButton
              variant="contained"
              type="submit"
              size="large"
              loading={isLoading}
              loadingPosition="end"
            >
              {t("signUp")}
            </LoadingButton>
          </Grid>
        </Box>

      </Box>
    </>
  )
}
