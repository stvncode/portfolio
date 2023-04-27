import { createStyles } from '@mantine/core'

export const useWorksDescriptionStyles = createStyles({
  container: {
    width: '100%',
  },
  back: {
    '&:hover': {
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  },
  image: {
    cursor: 'pointer',
  },
})
