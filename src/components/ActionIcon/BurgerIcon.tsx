import { ActionIcon, Menu, useMantineColorScheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { IconMenu2 } from '@tabler/icons-react'
import { FC } from 'react'

import { menuItems } from '../../constants/menu'

export const BurgerIcon: FC = () => {
  const { colorScheme } = useMantineColorScheme()
  const isMobile = useMediaQuery('(max-width: 767px)')

  const dark = colorScheme === 'dark'
  return isMobile ? (
    <Menu width={200} shadow="md">
      <Menu.Target>
        <ActionIcon variant="outline" color={dark ? 'gray.0' : 'dark.9'} title="Toggle  menu">
          <IconMenu2 size={18} />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Menu</Menu.Label>
        {menuItems.map((item, i) => (
          <Menu.Item key={i} icon={item.icon}>
            {item.name}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  ) : null
}
