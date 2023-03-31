import { Flex, Header as MantineHeader, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { FC } from 'react'

import { menuItems } from 'constants/menu'
import { BurgerIcon, PacmanIcon, ThemeIcon } from 'components/ActionIcon'

import { useLayoutStyles } from './Layout.styles'

export const Header: FC = () => {
  const { classes } = useLayoutStyles()

  const isMobile = useMediaQuery('(max-width: 767px)')

  return (
    <MantineHeader height={60} withBorder={false}>
      <Flex align="center" justify="space-between" className={classes.flex}>
        <Flex align="center" gap={70}>
          <Flex align="center" gap={15}>
            <PacmanIcon />
            <Text weight="bold" size={22}>
              Steven Travers
            </Text>
          </Flex>
          {!isMobile && (
            <Flex align="center" gap={20} className={classes.menu}>
              {menuItems.map((item, i) => (
                <Text key={i} size={15} className={classes.menuItem}>
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
