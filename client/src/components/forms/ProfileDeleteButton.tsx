import { LoadingButton } from '@mui/lab'
import { Alert, Snackbar } from '@mui/material';
import React, { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { deleteAccessTokenCookie } from '../../api/auth.api';
import { deleteUser } from '../../api/users.api';
import { AuthContext } from '../../contexts/AuthContext';

export const ProfileDeleteButton = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showSnackbar, setShowSnackbar] = useState<boolean>(false);
  const [isMessageSuccess, setIsMessageSuccess] = useState<boolean>(false);
  const deconnexionAlertSnackBarSeverity = isMessageSuccess ? 'success' : 'error';

  const handleLogOutClick = async () => {
    try {
      setIsLoading(true);
      await deleteUser();

      setIsMessageSuccess(true);
      setTimeout(() => {
        authContext.setIsLogged(false);
        navigate('/');
      }, 1000);
    } catch (error) {
      console.error(error);
      setIsMessageSuccess(false);
    }

    setShowSnackbar(true);
    setIsLoading(false);
  }

  return (
    <>
      <LoadingButton
        variant="contained"
        type="submit"
        size="small"
        color="error"
        loading={isLoading}
        onClick={handleLogOutClick}
      >
        {t("deleteAccount")}
      </LoadingButton>

      <Snackbar
        open={showSnackbar}
        autoHideDuration={6000}
        onClose={() => setShowSnackbar(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}>
        <Alert severity={deconnexionAlertSnackBarSeverity}>
          {isMessageSuccess
            ? t('successfulSuppression')
            : t('successfulSuppression')}
        </Alert>
      </Snackbar>
    </>
  )
}
