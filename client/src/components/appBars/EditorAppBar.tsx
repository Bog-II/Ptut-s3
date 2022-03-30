import { AppBar, Box, Toolbar } from '@mui/material'
import React from 'react'
import { ChangeLanguageSelect } from './components/ChangeLanguageSelect'
import { ConnectedUsers } from './components/ConnectedUsers'
import { DocumentNameTextField } from './components/DocumentNameTextField'
import { EditorShareButton } from './components/EditorShareButton'
import { LogoButton } from './components/LogoButton'
import { ProfileButton } from './components/ProfileButton'

interface EditorAppBarProps {
  documentName: string
}

export const EditorAppBar = ({ documentName }: EditorAppBarProps) => {
  return (
    <AppBar position="static" color="inherit">
      <Toolbar
        variant="regular"
        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        <Box sx={{ display: 'flex', columnGap: 2, alignItems: 'center' }}>
          <LogoButton />
          <DocumentNameTextField pDocumentName={documentName} />
        </Box>

        <Box sx={{ display: 'flex', columnGap: 2, alignItems: 'center' }}>
          <ConnectedUsers />
          <EditorShareButton />
          <ChangeLanguageSelect />
          <ProfileButton />
        </Box>

      </Toolbar>
    </AppBar>
  )
}
