import { createTheme, PaletteMode } from '@mui/material';
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

export const getLocalThemeMode = (): PaletteMode => {
  if (localStorage.getItem('themeMode') == 'light') {
    return 'light';
  }
  return 'dark';
};

export const setLocalThemeMode = (themeMode: PaletteMode): void => {
  localStorage.setItem('themeMode', themeMode);
};
