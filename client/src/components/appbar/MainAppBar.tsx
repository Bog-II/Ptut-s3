import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeModeButton } from './ThemeModeButton';
import { ChangeLanguageSelect } from './ChangeLanguageSelect';
import { RegistrationButton } from './RegistrationButton';
import { AthentificationButton } from './AthentificationButton';
import { ProfileButton } from './ProfileButton';
import { LogoButton } from './LogoButton';

export default function ButtonAppBar() {
  return (
    <AppBar position="static" color="inherit">
      <Toolbar
        variant="regular"
        sx={{ display: 'flex', columnGap: 2, alignItems: 'center' }}
      >
        <LogoButton />

        <ChangeLanguageSelect />
        <ThemeModeButton />

        <Box sx={{ display: 'flex', columnGap: 1 }}>
          <AthentificationButton />
          <RegistrationButton />
        </Box>

        <ProfileButton />
      </Toolbar>
    </AppBar>
  );
}
