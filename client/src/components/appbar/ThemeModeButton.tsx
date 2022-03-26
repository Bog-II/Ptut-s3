import { DarkMode, LightMode } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useContext } from 'react';
import { ThemeModeContext } from '../../contexts/ThemeModeContext';

export const ThemeModeButton = () => {
  const ThemeMode = useContext(ThemeModeContext);

  const themeMode = ThemeMode.themeMode;
  const setThemeMode = ThemeMode.setThemeMode;

  const onHandleClickThemeModeButton = () => {
    if (themeMode === 'light') {
      setThemeMode('dark');
    } else {
      setThemeMode('light');
    }
  };

  return (
    <IconButton onClick={onHandleClickThemeModeButton}>
      {themeMode === 'light' ? <LightMode /> : <DarkMode />}
    </IconButton>
  );
};
