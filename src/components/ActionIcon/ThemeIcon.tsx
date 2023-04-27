import { ActionIcon, useMantineColorScheme } from '@mantine/core'
import { IconMoonStars, IconSun } from '@tabler/icons-react'
import { AnimatePresence, motion } from 'framer-motion'
import { FC } from 'react'

export const ThemeIcon: FC = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  const dark = colorScheme === 'dark'

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={dark ? 'dark' : 'light'}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <ActionIcon
          variant="filled"
          color={dark ? 'yellow.7' : 'violet.9'}
          onClick={() => toggleColorScheme()}
          title="Toggle color scheme"
        >
          {dark ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
        </ActionIcon>
      </motion.div>
    </AnimatePresence>
  )
}
