import React from 'react';
import { AuthContextInterface } from '../interfaces/AuthContextInterface';

export const AuthContext =
  React.createContext<AuthContextInterface>({
    isLogged: false,
    setIsLogged: () => {},
  });
