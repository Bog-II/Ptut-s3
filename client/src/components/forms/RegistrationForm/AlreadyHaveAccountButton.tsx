import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

export const AlreadyHaveAccountButton = () => {

  const { t, i18n } = useTranslation('forms');

  return (
    <Link to="/authentification">
      {t('alreadyHaveAnAccount')}
    </Link>
  )
}
