import { Box, Container, Typography } from '@mui/material';
import {
  DataGridPro,
  GridCallbackDetails,
  GridColDef,
  GridRenderCellParams,
  GridRowParams,
  MuiEvent,
} from '@mui/x-data-grid-pro';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DocumentsDataGridContext } from '../../contexts/DocumentDataGridContext';
import { documentsData } from '../../data/documentsDataGrid';
import { DocumentInterface } from '../../interfaces/DocumentInterface';
import { getDateString, getSizeString, getTimeString } from '../../utils/Document';
import { CreateNewDocumentButton } from './CreateNewDocumentButton';
import { DocumentsDataGridActions } from './DocumentsDataGridActions';
import { DocumentsToolBar } from './DocumentsToolbar';

export const DocumentsDataGrid = () => {
  const [searchBarValue, setSearchBarValue] = useState<string>('');
  const [fileredDocuments, setFileredDocuments] = useState<DocumentInterface[]>(
    [...documentsData]
  );

  const { t, i18n } = useTranslation();

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

  useEffect(() => {
    if (searchBarValue == '') {
      setFileredDocuments([...documentsData]);
    } else {
      const delayFilterDocuments = setTimeout(() => {
        const filteredDocuments = documentsData.filter((document) => {
          const line =
            document.documentName.toLowerCase() +
            getDateString(document.creationDate).toLowerCase() +
            getTimeString(document.lastModificationTime).toLowerCase() +
            getSizeString(document.documentSize).toLowerCase();

          return line.includes(searchBarValue.toLowerCase());
        });
        setFileredDocuments(filteredDocuments);
      }, 600);

      return () => clearTimeout(delayFilterDocuments);
    }
  }, [searchBarValue]);

  const handleRowClick = (
    params: GridRowParams,
    event: MuiEvent<React.MouseEvent>,
    details: GridCallbackDetails
  ) => {
    console.log(params);
    console.log(event);
    console.log(details);
  };

  return (
    <Container sx={{
      display: 'flex',
      flexDirection: 'column',
      rowGap: 'max(5%, 10px)'
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
            Toolbar: DocumentsToolBar,
          }}
          pageSize={5}
          autoHeight={true}
          disableColumnPinning
          disableColumnMenu
          disableColumnResize
          onRowClick={handleRowClick}
          hideFooter
          density="standard"
        />
      </DocumentsDataGridContext.Provider>
    </Container>
  );
};
