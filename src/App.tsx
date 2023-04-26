import { ColorScheme, ColorSchemeProvider, DEFAULT_THEME, MantineProvider } from '@mantine/core'
import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Layout } from 'components/Layout'
import { Home } from 'pages/Home'
import { useLocalStorage } from '@mantine/hooks'
import { Contact } from 'pages/Contact'
import { Work } from 'pages/Work'

export const App: FC = () => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({ key: 'color-scheme', defaultValue: 'dark' })

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  const theme = {
    ...DEFAULT_THEME,
    colors: {
      ...DEFAULT_THEME.colors,
    },
    colorScheme,
    white: '#efe7db',
    black: '#202023',
    fontFamily: 'futura',
  }

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="works" element={<Work />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
