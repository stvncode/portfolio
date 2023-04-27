import { createStyles } from '@mantine/core'

export const useTypographyStyles = createStyles(theme => ({
  underlineOffset: {
    textUnderlineOffset: '0.2em',
    textDecoration: 'underline',
  },
  text: {
    color: theme.colorScheme === 'dark' ? '#efe7db' : '#202023',
  },
  indent: {
    textAlign: 'justify',
    textIndent: '1em',
  },
}))
