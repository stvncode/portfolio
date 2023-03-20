import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core'
import { FC, useState } from 'react'
import { Layout } from './components/Layout'

export const App: FC = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light')
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <Layout />
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
