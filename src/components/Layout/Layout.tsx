import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { Text } from '@mantine/core'
import { Header } from './Header'
import { useLayoutStyles } from './Layout.styles'

export const Layout: FC = () => {
  const { classes } = useLayoutStyles()

  return (
    <div className={classes.container}>
      <Header />
      <Outlet />
      <Text mt={50} mb={30} color="gray" align='center'>2023 Steven Travers. All Rights Reserved.</Text>
    </div>
  )
}
