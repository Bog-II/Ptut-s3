import { Link } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const DoNotHaveAnAccount = () => {

  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/registration');
  }

  return (
    <Link onClick={handleClick}>
      {t('donotHaveAnAccount')}
    </Link>
  )
}
