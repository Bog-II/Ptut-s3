import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeModeButton } from './components/ThemeModeButton';
import { ChangeLanguageSelect } from './components/ChangeLanguageSelect';
import { RegistrationButton } from './components/RegistrationButton';
import { AthentificationButton } from './components/AthentificationButton';
import { LogoButton } from './components/LogoButton';
import { ProfileButton } from './components/ProfileButton';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export default function ButtonAppBar() {
  const authContext = useContext(AuthContext);

  return (
    <AppBar position="static" color="inherit">
      <Toolbar
        variant="regular"
        sx={{ display: 'flex', columnGap: 2, alignItems: 'center' }}
      >
        <LogoButton />

        <ChangeLanguageSelect />
        <ThemeModeButton />


        {authContext.isLogged
          ? <ProfileButton />
          : <Box sx={{ display: 'flex', columnGap: 1 }}>
            <AthentificationButton />
            <RegistrationButton />
          </Box>
        }
      </Toolbar>
    </AppBar>
  );
}
