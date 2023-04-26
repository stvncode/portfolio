import { createStyles } from '@mantine/core'

export const useLayoutStyles = createStyles({
  container: {
    maxWidth: '40rem',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  flex: {
    height: '100%',
    margin: '0 -7rem',
  },
  menu: {
    marginTop: '.3rem',
  },
  menuItem: {
    '&:hover': {
      textDecoration: 'underline',
      textUnderlineOffset: '4px',
      cursor: 'pointer',
    },
  },
  link: { textDecoration: 'none', color: 'inherit' },
  title: {
    cursor: 'pointer',
  },
})
