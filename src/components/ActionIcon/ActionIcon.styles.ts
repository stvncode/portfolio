import { createStyles } from '@mantine/core'

export const useActionStyles = createStyles({
  pacman: {
    cursor: 'pointer',
    '&:hover': {
      transform: 'rotate(360deg)',
      transition: 'transform 0.5s ease',
    },
  },
})
