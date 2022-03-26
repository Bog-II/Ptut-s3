import { createTheme } from '@mui/material';
import React from 'react';
import { ThemeModeInterface } from '../interfaces/ThemeModeInterface';

export const ThemeModeContext = React.createContext<ThemeModeInterface>({
  themeMode: 'dark',
  setThemeMode: () => {},
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});
