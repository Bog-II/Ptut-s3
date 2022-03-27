import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { IconButton, Tooltip } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ChangeLanguageSelect } from '../appbar/ChangeLanguageSelect';

export default function ButtonAppBar() {
  const { t, i18n } = useTranslation("appBar");

  return (
    <AppBar position="static" color="inherit">
      <Toolbar
        variant="regular"
        sx={{ display: 'flex', columnGap: 2, alignItems: 'center' }}
      >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          OpenDocs
        </Typography>

        <ChangeLanguageSelect />

        <Tooltip title="Profile">
          <IconButton>
            <AccountCircle fontSize="large" />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}
