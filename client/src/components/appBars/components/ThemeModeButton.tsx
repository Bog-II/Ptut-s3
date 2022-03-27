import { DarkMode, LightMode } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeModeContext } from '../../../contexts/ThemeModeContext';

export const ThemeModeButton = () => {
  const ThemeMode = useContext(ThemeModeContext);
  const { t, i18n } = useTranslation();

  const themeMode = ThemeMode.themeMode;
  const setThemeMode = ThemeMode.setThemeMode;

  const onHandleClickThemeModeButton = () => {
    if (themeMode === 'light') {
      setThemeMode('dark');
    } else {
      setThemeMode('light');
    }
  };

  const tooltipText = themeMode === 'light' ? t('dark') : t('light')

  return (
    <Tooltip title={tooltipText}>
      <IconButton onClick={onHandleClickThemeModeButton}>
        {themeMode === 'light' ? <LightMode /> : <DarkMode />}
      </IconButton>
    </Tooltip>
  );
};
