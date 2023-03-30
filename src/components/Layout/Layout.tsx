import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from './Header'
import { useLayoutStyles } from './Layout.styles'

export const Layout: FC = () => {
  const { classes } = useLayoutStyles()

  return (
    <div className={classes.container}>
      <Header />
      <Outlet />
    </div>
  )
}
