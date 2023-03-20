import { ActionIcon, useMantineColorScheme } from '@mantine/core'
import { IconPacman, IconMoonStars } from '@tabler/icons-react'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useActionStyles } from './ActionIcon.styles'

export const PacmanIcon: FC = () => {
  const navigate = useNavigate()

  const { classes } = useActionStyles()
  const { colorScheme } = useMantineColorScheme()

  const dark = colorScheme === 'dark'

  return (
    <ActionIcon
      variant="transparent"
      color={dark ? 'gray.0' : 'dark.9'}
      onClick={() => navigate('/')}
      className={classes.pacman}
      title="Icon"
    >
      <IconPacman size="3rem" />
    </ActionIcon>
  )
}
