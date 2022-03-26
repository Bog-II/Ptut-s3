import { Close } from '@mui/icons-material';
import { Button, IconButton, Snackbar } from '@mui/material';
import { SyntheticEvent, useState } from 'react';

export const DocumentDataGridCellSnackBar = () => {
  const [openSnackBar, setOpenSnackBar] = useState(true);

  const closeSnackBar = () => {
    setOpenSnackBar(false);
  };

  const deleteDocument = () => {
    console.log('deleteFile');
    closeSnackBar();
  };

  const handleOnCloseSnackBar = (
    event: SyntheticEvent<any> | Event,
    reason: string
  ) => {
    if (reason === 'timeout') {
      deleteDocument();
    }
  };

  const action = (
    <>
      <Button color="primary" size="small" onClick={closeSnackBar}>
        Annuler
      </Button>
      <IconButton size="small" color="inherit" onClick={deleteDocument}>
        <Close />
      </IconButton>
    </>
  );

  return (
    <>
      {/* SnackbarProvider - queue
        https://mui.com/components/snackbars/
      */}
      <Snackbar
        open={openSnackBar}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        onClose={handleOnCloseSnackBar}
        message="Supprimer le document"
        action={action}
      />
    </>
  );
};
