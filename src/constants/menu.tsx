import { IconBrandGithub } from '@tabler/icons-react'

interface MenuItems {
  name: 'Works' | 'Contact' | 'Source'
  icon?: JSX.Element
}

export const menuItems: MenuItems[] = [
  { name: 'Works' },
  { name: 'Contact' },
  { name: 'Source', icon: <IconBrandGithub size={14} /> },
]
