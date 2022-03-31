import { Add } from '@mui/icons-material';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { createNewDocument } from '../../api/documents.api';

export const CreateNewDocumentButton = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [dialogTexteFieldValue, setDialogTexteFieldValue] = useState('');

  const [showDialog, setShowDialog] = useState(false);

  const onButtonClick = () => {
    setShowDialog(true);
  }

  const handleClose = () => {
    setShowDialog(false);
    setDialogTexteFieldValue('');
  }

  const handleCreate = async () => {
    console.log('handleCreate')
    handleClose();
    const documentName = dialogTexteFieldValue;
    const document = await createNewDocument(documentName);
    console.log(document);

  }

  return (
    <>
      <Button
        size="large"
        variant="contained"
        onClick={onButtonClick}
        startIcon={<Add />}>
        {t("newDocument")}
      </Button>

      <Dialog
        open={showDialog}
        onClose={handleClose}
        fullWidth>
        <DialogTitle>{t('newDocument')}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            value={dialogTexteFieldValue}
            onChange={(e) => setDialogTexteFieldValue(e.target.value)}
            margin="dense"
            id="name"
            label={t('documentName')}
            type="text"
            fullWidth
            variant="standard" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{t('cancel')}</Button>
          <Button onClick={handleCreate}>{t('create')}</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
