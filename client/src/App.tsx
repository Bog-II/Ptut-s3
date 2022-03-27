import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Authentification from './pages/Authentification';
import Docs from './pages/Docs';
import Home from './pages/Home';
import Registration from './pages/Registration';
import { v4 } from 'uuid';
import { CssBaseline, PaletteMode, ThemeProvider } from '@mui/material';
import { darkTheme, getLocalThemeMode, lightTheme, setLocalThemeMode, ThemeModeContext } from './contexts/ThemeModeContext';

export default function App() {
  const defaultThemeMode = getLocalThemeMode();
  const [mode, setMode] = useState<PaletteMode>(defaultThemeMode);
  const theme = mode === 'dark' ? darkTheme : lightTheme;

  const setThemeMode = (mode: PaletteMode) => {
    setMode(mode)
    setLocalThemeMode(mode);
  }

  return (
    <ThemeModeContext.Provider
      value={{
        themeMode: mode,
        setThemeMode: setThemeMode,
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {/* Router */}
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Redirect to={`/docs/${v4()}`} /> */}
            <Route path="/docs/:id" element={<Docs />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/authentification" element={<Authentification />} />
            <Route path="/share/:id" element={''} />

            <Route path="*" element={<Navigate to='/' />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}
