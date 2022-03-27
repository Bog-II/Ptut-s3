import { Button } from '@mui/material'
import { useTranslation } from 'react-i18next';

export const SubmitButton = () => {
  const { t, i18n } = useTranslation('forms');

  return (
    <Button variant="contained" type="submit" size="large"  >
      {t("signUp")}
    </Button>
  )
}