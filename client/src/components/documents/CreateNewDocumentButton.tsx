import { Add } from '@mui/icons-material';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const CreateNewDocumentButton = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [showDialog, setShowDialog] = useState(false);

  const onButtonClick = () => {
    setShowDialog(true);
  }

  const handleClose = () => {
    setShowDialog(false);
  }

  const handleCreate = () => {
    navigate('/registration');
    handleClose();
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
            margin="dense"
            id="name"
            label="Nom du document"
            type="email"
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
