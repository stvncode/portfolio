import { FC, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import { Flex, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import Spline from '@splinetool/react-spline'
import { CustomLoader } from 'components/Loader'
import { Header } from './Header'
import { useLayoutStyles } from './Layout.styles'

export const Layout: FC = () => {
  const { pathname } = useLocation()

  const isMobile = useMediaQuery('(max-width: 767px)')

  const [loading, setLoading] = useState(true)

  const { classes } = useLayoutStyles({ isContact: pathname.slice(1) === 'contact', isMobile })

  return (
    <Flex direction="column" className={classes.container}>
      <Header />
      <Flex direction="column" className={classes.outlet} gap={40}>
        {loading && <div className={classes.loader}>
          <CustomLoader />
        </div>}
        <Spline scene="https://prod.spline.design/YN9t6Mh75dwr5W-4/scene.splinecode" onLoad={() => setLoading(false)} />
        <Outlet />
      </Flex>
      <Text mt={50} mb={30} color="gray.6" align='center' className={classes.footer}>2023 Steven Travers. All Rights Reserved.</Text>
    </Flex>
  )
}
