import { Avatar, AvatarGroup, Tooltip } from '@mui/material'
import { connectedPersons } from '../../../data/connectedPersons';

type userAvatar = [string, string, string]; // [userId, username, randomColor]

export const ConnectedUsers = () => {

  return (
    <AvatarGroup max={5}>
      {connectedPersons.map(([userId, username, randomColor]) =>
        <Tooltip key={userId} title={username}>
          <Avatar sx={{ bgcolor: randomColor }}>
            {username[0]}
          </Avatar>
        </Tooltip>
      )}
    </AvatarGroup>
  )
}
