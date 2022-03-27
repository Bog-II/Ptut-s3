import { Link } from '@mui/icons-material'
import { Button } from '@mui/material'
import { useTranslation } from 'react-i18next';

export const EditorShareButton = () => {
  const { t, i18n } = useTranslation();

  return (
    <Button variant="contained" startIcon={<Link />}>
      {t('share')}
    </Button>
  )
}
