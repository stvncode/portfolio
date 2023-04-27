import { createStyles } from '@mantine/core'

export const useActionStyles = createStyles(theme => ({
  pacman: {
    cursor: 'pointer',
    '&:hover': {
      transform: 'rotate(360deg)',
      transition: 'transform 0.5s ease',
    },
  },
  icon: {
    color: theme.colorScheme === 'light' ? '#000' : '#efe7db',
  },
}))
