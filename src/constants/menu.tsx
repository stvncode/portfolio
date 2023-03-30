import { IconAddressBook, IconBackpack, IconUserCode } from '@tabler/icons-react'

interface MenuItems {
  name: string
  icon: JSX.Element
}

export const menuItems: MenuItems[] = [
  { name: 'About', icon: <IconUserCode size={14} /> },
  { name: 'Works', icon: <IconBackpack size={14} /> },
  { name: 'Contact', icon: <IconAddressBook size={14} /> },
]
