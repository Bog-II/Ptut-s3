import { Avatar, AvatarGroup, Tooltip } from '@mui/material'
import { connectedPersons } from '../../../data/connectedPersons';

type userAvatar = [string, string, string]; // [userId, userName, randomColor]

export const ConnectedUsers = () => {

  return (
    <AvatarGroup max={5}>
      {connectedPersons.map(([userId, userName, randomColor]) =>
        <Tooltip key={userId} title={userName}>
          <Avatar sx={{ bgcolor: randomColor }}>
            {userName[0]}
          </Avatar>
        </Tooltip>
      )}
    </AvatarGroup>
  )
}
