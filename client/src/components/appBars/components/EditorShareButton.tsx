import { ContentPaste, Link } from '@mui/icons-material'
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip
} from '@mui/material'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { copyToClipboard } from '../../../utils/Editor';

export const EditorShareButton = () => {
  const { t, i18n } = useTranslation();

  const [shareDialogoOpen, setShareDialogoOpen] = useState<boolean>(false);
  const [shareEditorId, setShareEditorId] = useState<string>('');
  const [shareLectureId, setShareLectureId] = useState<string>('');

  const showShareDialog = (documentId: string) => {
    console.log(documentId);
    setShareEditorId('linkEditor');
    setShareLectureId('linkLecture');
    setShareDialogoOpen(true);
  }

  const hideShareDialog = () => {
    setShareDialogoOpen(false);
  }

  return (
    <>
      <Button variant="contained" onClick={() => showShareDialog("documentId")} startIcon={<Link />}>
        {t('share')}
      </Button>

      <Dialog
        open={shareDialogoOpen}
        onClose={hideShareDialog}
        fullWidth>
        <DialogTitle>{t('shareDocument')}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            value={shareEditorId}
            margin="dense"
            label={t('editor')}
            fullWidth
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {shareEditorId != '' ? (
                    <Tooltip title={t('copy').toString()}>
                      <IconButton onClick={() => copyToClipboard(shareEditorId)}>
                        <ContentPaste />
                      </IconButton>
                    </Tooltip>
                  ) : null}
                </InputAdornment>
              ),
            }} />

          <TextField
            autoFocus
            value={shareLectureId}
            margin="dense"
            label={t('lecture')}
            fullWidth
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {shareLectureId != '' ? (
                    <Tooltip title={t('copy').toString()}>
                      <IconButton onClick={() => copyToClipboard(shareLectureId)}>
                        <ContentPaste />
                      </IconButton>
                    </Tooltip>
                  ) : null}
                </InputAdornment>
              ),
            }} />
        </DialogContent>
        <DialogActions>
          <Button onClick={hideShareDialog}>{t('hide')}</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
