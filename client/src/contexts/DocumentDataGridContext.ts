import React from 'react';
import { DocumentsDataGridContextInterface } from '../interfaces/DocumentDataGridContextInterface';

export const DocumentsDataGridContext =
  React.createContext<DocumentsDataGridContextInterface>({
    searchBarValue: '',
    setSearchBarValue: () => {},
  });
