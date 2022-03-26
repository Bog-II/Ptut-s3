import { Container } from '@mui/material';
import {
  DataGridPro,
  GridCallbackDetails,
  GridRowParams,
  MuiEvent,
} from '@mui/x-data-grid-pro';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DocumentsDataGridContext } from '../../contexts/DocumentDataGridContext';
import { documentsData } from '../../data/documentsDataGrid';
import { DocumentInterface } from '../../interfaces/DocumentInterface';
import { getDateString, getSizeString, getTimeString } from '../../utils/Document';
import { columns } from './columns';
import { DocumentsToolBar } from './DocumentsToolbar';

export const DocumentsDataGrid = () => {
  const [searchBarValue, setSearchBarValue] = useState<string>('');
  const [fileredDocuments, setFileredDocuments] = useState<DocumentInterface[]>(
    [...documentsData]
  );

  const { t, i18n } = useTranslation();

  const tDoc = (key: string) => {
    return t('documents.' + key);
  };

  console.log('toolbarDensity', t('toolbarDensity'));

  const DATA_GRID_LOCALE_TEXT = {
    // 0 Documents
    noRowsLabel: tDoc('noRowsLabel'),

    // Filters button
    toolbarFilters: tDoc('toolbarFilters'),

    // Density button
    toolbarDensity: tDoc('toolbarDensity'),
    toolbarDensityLabel: tDoc('toolbarDensityLabel'),
    toolbarDensityCompact: tDoc('toolbarDensityCompact'),
    toolbarDensityStandard: tDoc('toolbarDensityStandard'),
    toolbarDensityComfortable: tDoc('toolbarDensityComfortable'),
  };

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
      }, 500);

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
    <>
      <Container>
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
    </>
  );
};
