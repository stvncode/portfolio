import { Flex, Header as MantineHeader, Text, useMantineColorScheme } from '@mantine/core'
import { FC } from 'react'
import { ThemeIcon } from '../ActionIcon'
import { PacmanIcon } from '../ActionIcon/PacmanIcon'
import { useLayoutStyles } from './Layout.styles'

export const Header: FC = () => {
  const { classes } = useLayoutStyles()
  const { colorScheme } = useMantineColorScheme()

  const dark = colorScheme === 'dark'

  return (
    <MantineHeader height={60}>
      <Flex align="center" justify="space-between" className={classes.flex}>
        <Flex align="center" gap={20}>
          <PacmanIcon />
          <Text color={dark ? 'gray.0' : 'dark.9'} weight="bold" size={22}>
            Steven Travers
          </Text>
        </Flex>
        <ThemeIcon />
      </Flex>
    </MantineHeader>
  )
}
