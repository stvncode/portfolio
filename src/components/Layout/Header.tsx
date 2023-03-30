import { Flex, Header as MantineHeader, Text, useMantineColorScheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { FC } from 'react'

import { menuItems } from '../../constants/menu'
import { ThemeIcon } from '../ActionIcon'
import { BurgerIcon } from '../ActionIcon/BurgerIcon'
import { PacmanIcon } from '../ActionIcon/PacmanIcon'

import { useLayoutStyles } from './Layout.styles'

export const Header: FC = () => {
  const { classes } = useLayoutStyles()
  const { colorScheme } = useMantineColorScheme()

  const isMobile = useMediaQuery('(max-width: 767px)')

  const dark = colorScheme === 'dark'

  return (
    <MantineHeader height={60} withBorder={false}>
      <Flex align="center" justify="space-between" className={classes.flex}>
        <Flex align="center" gap={70}>
          <Flex align="center" gap={15}>
            <PacmanIcon />
            <Text color={dark ? 'gray.0' : 'dark.9'} weight="bold" size={22}>
              Steven Travers
            </Text>
          </Flex>
          {!isMobile && (
            <Flex align="center" gap={20} className={classes.menu}>
              {menuItems.map((item, i) => (
                <Text
                  key={i}
                  color={dark ? 'gray.0' : 'dark.9'}
                  size={15}
                  className={classes.menuItem}
                >
                  {item.name}
                </Text>
              ))}
            </Flex>
          )}
        </Flex>
        <Flex align="center" gap={10}>
          <ThemeIcon />
          <BurgerIcon />
        </Flex>
      </Flex>
    </MantineHeader>
  )
}
