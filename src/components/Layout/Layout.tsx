import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { Flex, Text } from '@mantine/core'
import { Header } from './Header'
import { useLayoutStyles } from './Layout.styles'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}

export const Layout: FC = () => {
  const { classes } = useLayoutStyles()

  return (
    <Flex direction="column" className={classes.container}>
      <Header />
      <Flex className={classes.outlet}>
        <Outlet />
      </Flex>
      <Text mt={50} mb={30} color="gray" align='center' className={classes.footer}>2023 Steven Travers. All Rights Reserved.</Text>
    </Flex>
  )
}
