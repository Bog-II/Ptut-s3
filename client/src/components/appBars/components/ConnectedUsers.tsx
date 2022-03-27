import { Avatar, AvatarGroup, Tooltip } from '@mui/material'
import { deepOrange } from '@mui/material/colors'



import React, { useState } from 'react'
import { connectedPersons } from '../../../data/connectedPersons';

type userAvatar = [string, string, string]; // [userId, userName, randomColor]

export const ConnectedUsers = () => {

  return (
    <AvatarGroup max={5}>
      {connectedPersons.map(([_, userName, randomColor]) =>
        <Tooltip title={userName}>
          <Avatar sx={{ bgcolor: randomColor }}>
            {userName[0]}
          </Avatar>
        </Tooltip>
      )}
    </AvatarGroup>
  )
}
