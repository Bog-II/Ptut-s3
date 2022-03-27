import { TextField } from '@mui/material';
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

interface DocumentInput {
  pDocumentName: string
}

export const DocumentNameTextField = (props: DocumentInput) => {
  const { pDocumentName } = props;
  const [documentName, setDocumentName] = useState(pDocumentName)

  const { t, i18n } = useTranslation();

  return (
    <TextField
      label={t("documentName")}
      value={documentName}
      onChange={(e) => setDocumentName(e.target.value)}
      color="primary"
      type="text"
      size="small"
    />
  )
}
