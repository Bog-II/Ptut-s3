import { Add } from '@mui/icons-material';
import { Button } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';

export const CreateNewDocumentButton = () => {
  const { t, i18n } = useTranslation('documents');

  return (
    <Button size="large" variant="contained" startIcon={<Add />}>
      {t("newDocument")}
    </Button>
  )
}
