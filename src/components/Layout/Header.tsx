import { Flex, Header as MantineHeader, Text, useMantineColorScheme } from '@mantine/core'
import { FC } from 'react'
import { ThemeIcon } from '../ActionIcon'
import { useLayoutStyles } from './Layout.styles'

export const Header: FC = () => {
  const { classes } = useLayoutStyles()

  return (
    <MantineHeader height={60}>
      <Flex align="center" justify="space-between" className={classes.flex}>
        <Flex align="center" gap={20}>
          <div>icon</div>
          <Text weight="bold" size={22}>
            Steven Travers
          </Text>
        </Flex>
        <ThemeIcon />
      </Flex>
    </MantineHeader>
  )
}
