import { Flex, Header as MantineHeader } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { FC } from 'react'

import { BurgerIcon, PacmanIcon, ThemeIcon } from 'components/ActionIcon'
import { menuItems } from 'constants/menu'

import { CustomText } from 'components/Typography'
import { Link, useNavigate } from 'react-router-dom'
import { useLayoutStyles } from './Layout.styles'

export const Header: FC = () => {
  const { classes } = useLayoutStyles(false)

  const navigate = useNavigate()

  const isMobile = useMediaQuery('(max-width: 767px)')

  return (
    <MantineHeader height={60} withBorder={false}>
      <Flex align="center" justify="space-between" className={classes.flex}>
        <Flex align="center" gap={70}>
          <Flex align="center" gap={8}>
            <PacmanIcon />
            <CustomText weight="bold" size="xl" className={classes.title} onClick={() => navigate('/')}>
              Steven Travers
            </CustomText>
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
  const { classes } = useLayoutStyles(false)

  return <Flex align="center" gap={5} className={classes.menuItem}>
    {icon}
    <CustomText size={15}>
      {name}
    </CustomText>
  </Flex>

}
