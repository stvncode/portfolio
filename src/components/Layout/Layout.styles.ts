import { createStyles } from '@mantine/core'

export const useLayoutStyles = createStyles(
  (_, { isContact, isMobile }: { isContact: boolean; isMobile: boolean }) => ({
    container: {
      maxWidth: '40rem',
      marginRight: 'auto',
      marginLeft: 'auto',
      minHeight: '100vh',
    },
    flex: {
      height: '100%',
      margin: !isMobile ? '0 -7rem' : undefined,
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
    footer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    },
    outlet: {
      flex: 1,
      justifyContent: isContact ? 'start' : undefined,
    },
    loader: {
      height: '230px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
)
