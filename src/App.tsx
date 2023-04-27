import { ColorScheme, ColorSchemeProvider, DEFAULT_THEME, MantineProvider } from '@mantine/core'
import { FC } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { useLocalStorage } from '@mantine/hooks'
import { Layout } from 'components/Layout'
import { Contact } from 'pages/Contact'
import { Home } from 'pages/Home'
import { Work, WorkDescription } from 'pages/Work'

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
              <Route path="works">
                <Route index element={<Work />} />
                <Route path=":id" element={<WorkDescription />} />
              </Route>
              <Route path="contact" element={<Contact />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
