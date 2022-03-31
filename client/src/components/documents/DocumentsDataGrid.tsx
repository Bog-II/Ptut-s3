import { Close, ContentPaste, Delete, DriveFileRenameOutline, Link, OpenInNew } from '@mui/icons-material';
import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, InputAdornment, LinearProgress, Snackbar, TextField, Tooltip, Typography } from '@mui/material';
import {
  DataGridPro,
  GridActionsCellItem,
  GridActionsColDef,
  GridCallbackDetails,
  GridColDef,
  GridRenderCellParams,
  GridRowParams,
  MuiEvent,
} from '@mui/x-data-grid-pro';
import React, { SyntheticEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { getUserDocuments } from '../../api/documents.api';
import { DocumentsDataGridContext } from '../../contexts/DocumentDataGridContext';
import { documentsData } from '../../data/documentsDataGrid';
import { DocumentInterface } from '../../interfaces/DocumentInterface';
import { getDateString, getSizeString, getTimeString, openInNewTab } from '../../utils/Document';
import { copyToClipboard } from '../../utils/Editor';
import { CreateNewDocumentButton } from './CreateNewDocumentButton';
import { DocumentsToolBar } from './DocumentsToolbar';

export const DocumentsDataGrid = () => {
  const { t, i18n } = useTranslation();

  const [searchBarValue, setSearchBarValue] = useState<string>('');
  const [documents, setDocuments] = useState<DocumentInterface[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const filterDocumentsFunction = () => {
    const filteredDocuments = documents.filter((document) => {
      const line = document.documentCreatorId.toLowerCase() +
        document.documentName.toLowerCase() +
        getDateString(document.creationDate).toLowerCase() +
        getTimeString(document.lastModificationTime).toLowerCase() +
        getSizeString(document.documentSize).toLowerCase();

      return line.includes(searchBarValue.toLowerCase());
    });
    setFileredDocuments(filteredDocuments);
  }

  useEffect(() => {
    if (searchBarValue == '') {
      setFileredDocuments([...documents]);
    } else {
      const delayFilterDocuments = setTimeout(() => {
        filterDocumentsFunction();
      }, 600);

      return () => clearTimeout(delayFilterDocuments);
    }
  }, [searchBarValue]);

  useEffect(() => {
    filterDocumentsFunction();
  }, [documents]);

  useEffect(() => {
    const fonctionLoad = async () => {
      setIsLoading(true);
      const rowDocuments = await getUserDocuments();

      const processedDocuments: DocumentInterface[] = [];

      for (const { _id, documentName, creationDate, lastModificationDate } of rowDocuments) {
        const processedDocument: DocumentInterface = {
          id: _id,
          documentName: documentName,
          documentCreatorId: '4512',
          creationDate: new Date(creationDate),
          lastModificationTime: new Date(lastModificationDate),
          documentSize: Math.floor(Math.random() * 2000),
        }
        processedDocuments.push(processedDocument);
      }

      setDocuments(processedDocuments);

      setTimeout(() => setIsLoading(false), 1600);
      
    };
    (async () => {
      await fonctionLoad();
    })()


    const interval = setInterval(async () => {
      await fonctionLoad();
    }, 15000);

    return () => {
      clearInterval(interval);
    }
  }, [])


  const [fileredDocuments, setFileredDocuments] = useState<DocumentInterface[]>(
    [...documents]
  );



  // Delete Snackbar - Start
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [snackBarId, setSnackBarId] = useState<string>('');

  const deleteDocumentById = (id: string) => {
    if (snackBarId != '') {
      deleteDocument();
    }

    setTimeout(() => {
      setSnackBarId(id);
      setOpenSnackBar(true);
    }, 44)
  }

  const handleCloseSnackBar = (
    event: SyntheticEvent<any> | Event,
    reason: string
  ) => {
    if (reason === 'timeout') {
      deleteDocument();
    }
  };

  const deleteDocument = () => {
    console.log('deleteFile', snackBarId);
    hideSnackBar();
  };

  const hideSnackBar = () => {
    setOpenSnackBar(false);
    setSnackBarId('');
  };

  const action = (
    <>
      <Button color="primary" size="small" onClick={hideSnackBar}>
        {t('cancel')}
      </Button>
      <IconButton size="small" color="inherit" onClick={deleteDocument}>
        <Close />
      </IconButton>
    </>
  );
  // Delete Snackbar - End


  // Rename Dialog - Start
  const [renameDialogOpen, setRenameDialogOpen] = useState<boolean>(false);
  const [dialogDocumentName, setDialogDocumentName] = useState<string>('');

  const showRenameDialog = (documentIdToRename: string) => {
    setRenameDialogOpen(true);
    setDialogDocumentName(documentIdToRename);
  }

  const handleRenameDocument = () => {
    console.log('renameDocument', dialogDocumentName);
    closeRenameDialog();
  }

  const closeRenameDialog = () => {
    setRenameDialogOpen(false);
    setDialogDocumentName('')
  }
  // Rename Dialog - End

  // Share Dialog - Start
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

  // Share Dialog - End

  const DATA_GRID_LOCALE_TEXT = {
    // 0 Documents
    noRowsLabel: t('noRowsLabel'),

    // Filters button
    toolbarFilters: t('toolbarFilters'),

    // Density button
    toolbarDensity: t('toolbarDensity'),
    toolbarDensityLabel: t('toolbarDensityLabel'),
    toolbarDensityCompact: t('toolbarDensityCompact'),
    toolbarDensityStandard: t('toolbarDensityStandard'),
    toolbarDensityComfortable: t('toolbarDensityComfortable'),
  };

  const DocumentsDataGridActions: GridActionsColDef = {
    field: 'actions',
    type: 'actions',
    getActions: (params: GridRowParams) => {
      if (params.id <= 2) {
        return [];
      }

      const { id } = params.row;

      return [
        <GridActionsCellItem
          icon={<Delete />}
          label={t('delete')}
          onClick={() => deleteDocumentById(id)}
          showInMenu
        />,
        <GridActionsCellItem
          icon={<DriveFileRenameOutline />}
          onClick={() => showRenameDialog(id)}
          label={t('rename')}
          showInMenu
        />,
        <GridActionsCellItem
          icon={<Link />}
          onClick={() => showShareDialog(id)}
          label={t('share')}
          showInMenu
        />,
        <GridActionsCellItem
          icon={<OpenInNew />}
          onClick={() => openInNewTab(`/docs/${id}`)}
          label={t('openInNewTab')}
          showInMenu
        />,
      ];
    },
  };

  const columns: GridColDef[] = [
    {
      field: 'documentName',
      headerName: t('documentName'),
      flex: 1,
      sortable: true,
      align: 'center',
      headerAlign: 'center',
      type: 'string',
    },
    {
      field: 'documentCreatorId',
      headerName: t('creator'),
      sortable: true,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      type: 'string',
    },
    {
      field: 'creationDate',
      headerName: t('createdOn'),
      type: 'date',
      flex: 1,
      sortable: true,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params: GridRenderCellParams) => {
        const lastModificationTime = params.row.lastModificationTime;
        return getDateString(lastModificationTime);
      },
    },
    {
      field: 'lastModificationTime',
      headerName: t('lastModification'),
      type: 'date',
      flex: 1,
      sortable: true,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params: GridRenderCellParams) => {
        const lastModificationTime = params.row.lastModificationTime;
        return getTimeString(lastModificationTime);
      },
    },
    {
      field: 'documentSize',
      headerName: t('size'),
      type: 'number',
      flex: 1,
      sortable: true,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params: GridRenderCellParams) => {
        return getSizeString(params.row.documentSize);
      },
    },
    DocumentsDataGridActions,
  ];



  const handleRowClick = (
    params: GridRowParams,
    event: MuiEvent<React.MouseEvent>,
    details: GridCallbackDetails
  ) => {
    const { id } = params.row;
    openInNewTab(`/docs/${id}`)
  };

  return (
    <Container sx={{
      display: 'flex',
      flexDirection: 'column',
      rowGap: 'max(5%, 10px)',
      m: 'max(8%, 20px)',
    }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Typography variant="h2" component="h1">
          {t('documents')}
        </Typography>

        <CreateNewDocumentButton />
      </Box>

      <DocumentsDataGridContext.Provider
        value={{
          searchBarValue: searchBarValue,
          setSearchBarValue: setSearchBarValue,
        }}
      >
        <DataGridPro
          rows={fileredDocuments}
          columns={columns}
          localeText={DATA_GRID_LOCALE_TEXT}
          components={{
            LoadingOverlay: LinearProgress,
            Toolbar: DocumentsToolBar,
          }}
          pageSize={5}
          autoHeight={true}
          disableColumnPinning
          disableColumnMenu
          disableColumnResize
          loading={isLoading}
          onRowClick={handleRowClick}
          hideFooter
          density="standard"
        />

        <Snackbar
          open={openSnackBar}
          autoHideDuration={5000}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          onClose={handleCloseSnackBar}
          message="Supprimer le document"
          action={action}
        />

        {/* Rename Dialog - Start */}
        <Dialog
          open={renameDialogOpen}
          onClose={closeRenameDialog}
          fullWidth>
          <DialogTitle>{t('renameDocument')}</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              value={dialogDocumentName}
              margin="dense"
              label={t('documentName')}
              onChange={(event) => setDialogDocumentName(event.target.value)}
              fullWidth
              variant="standard" />
          </DialogContent>
          <DialogActions>
            <Button onClick={closeRenameDialog}>{t('cancel')}</Button>
            <Button onClick={handleRenameDocument}>{t('rename')}</Button>
          </DialogActions>
        </Dialog>
        {/* Rename Dialog - End */}


        {/* Share Dialog - Start */}
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
        {/* Share Dialog - End */}
      </DocumentsDataGridContext.Provider>
    </Container>
  );
};
