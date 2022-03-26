import React from 'react';
import { AuthContextInterface } from '../interfaces/AuthContextInterface';

export const DocumentsDataGridContext =
  React.createContext<AuthContextInterface>({
    isLogged: false,
    setIsLogged: () => {},
  });
