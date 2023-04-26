import { Flex, Header as MantineHeader, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { FC } from 'react'

import { menuItems } from 'constants/menu'
import { BurgerIcon, PacmanIcon, ThemeIcon } from 'components/ActionIcon'

import { useLayoutStyles } from './Layout.styles'
import { Link } from 'react-router-dom'

export const Header: FC = () => {
  const { classes } = useLayoutStyles()

  const isMobile = useMediaQuery('(max-width: 767px)')

  return (
    <MantineHeader height={60} withBorder={false}>
      <Flex align="center" justify="space-between" className={classes.flex}>
        <Flex align="center" gap={70}>
          <Flex align="center" gap={15}>
            <PacmanIcon />
            <Text weight="bold" size="xl">
              Steven Travers
            </Text>
          </Flex>
          {!isMobile && (
            <Flex align="center" gap={20} className={classes.menu}>
              {menuItems.map((item, i) => <div key={i}>
                {item.name !== 'Source' ? (
                  <Link to={`${item.name.toLowerCase()}`} className={classes.link}>
                    <HeaderLink name={item.name} />
                  </Link>
                ) : <Link to="https://github.com/stvncode/portfolio" className={classes.link} target="_blank" rel="noopener noreferrer">
                  <HeaderLink name={item.name} icon={item.icon} />
                </Link>
                }</div>)}
            </Flex>
          )}
        </Flex>
        <Flex align="center" gap={10}>
          <ThemeIcon />
          <BurgerIcon />
        </Flex>
      </Flex>
    </MantineHeader >
  )
}

const HeaderLink: FC<{ name: string, icon?: JSX.Element }> = ({ icon, name }) => {
  const { classes } = useLayoutStyles()

  return <Flex align="center" gap={5} className={classes.menuItem}>
    {icon}
    <Text size={15}>
      {name}
    </Text>
  </Flex>

}
