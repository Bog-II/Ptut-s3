import { AppBar, Toolbar } from '@mui/material'
import React from 'react'
import { ChangeLanguageSelect } from './components/ChangeLanguageSelect'
import { ConnectedUsers } from './components/ConnectedUsers'
import { EditorShareButton } from './components/EditorShareButton'
import { LogoButton } from './components/LogoButton'
import { ProfileButton } from './components/ProfileButton'

export const EditorAppBar = () => {
  return (
    <AppBar position="static" color="inherit">
      <Toolbar
        variant="regular"
        sx={{ display: 'flex', columnGap: 2, alignItems: 'center' }}
      >
        <LogoButton />

        <ConnectedUsers />
        <EditorShareButton />
        <ChangeLanguageSelect />
        <ProfileButton />

      </Toolbar>
    </AppBar>
  )
}
