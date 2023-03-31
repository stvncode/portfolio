import { ActionIcon } from '@mantine/core'
import { IconPacman } from '@tabler/icons-react'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { useActionStyles } from './ActionIcon.styles'

export const PacmanIcon: FC = () => {
  const navigate = useNavigate()

  const { classes } = useActionStyles()

  return (
    <ActionIcon
      variant="transparent"
      onClick={() => navigate('/')}
      className={classes.pacman}
      title="Icon"
    >
      <IconPacman size="3rem" />
    </ActionIcon>
  )
}
