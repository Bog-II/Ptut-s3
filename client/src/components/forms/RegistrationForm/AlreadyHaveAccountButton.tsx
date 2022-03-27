import { Link } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const AlreadyHaveAccountButton = () => {

  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/authentification');
  }

  return (
    <Link onClick={handleClick}>
      {t('alreadyHaveAnAccount')}
    </Link>
  )
}
