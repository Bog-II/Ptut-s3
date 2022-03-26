import { PaletteMode } from '@mui/material';

interface ThemeModeInterface {
  themeMode: PaletteMode;
  setThemeMode: React.Dispatch<React.SetStateAction<PaletteMode>>;
}

export type { ThemeModeInterface };
