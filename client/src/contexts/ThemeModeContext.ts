import React from 'react';
import { ThemeModeInterface } from '../interfaces/ThemeModeInterface';

export const ThemeModeContext = React.createContext<ThemeModeInterface>({
  themeMode: 'dark',
  setThemeMode: () => {},
});
