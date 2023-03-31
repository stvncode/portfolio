import { Timeline as MTimeline, Text, ThemeIcon, Avatar, Flex } from '@mantine/core'
import { IconSun, IconVideo } from '@tabler/icons-react'
import { FC } from 'react'

import { useTimelineStyles } from './Timeline.styles'

export const Timeline: FC = () => {
  const { classes } = useTimelineStyles()

  return (
    <Flex justify="center">
      <MTimeline>
        <MTimeline.Item title="Default bullet" bulletSize={24}>
          <Text color="dimmed" size="sm">
            Default bullet without anything
          </Text>
        </MTimeline.Item>
        <MTimeline.Item
          title="Avatar"
          bulletSize={24}
          bullet={
            <Avatar
              size={22}
              radius="xl"
              src="https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
            />
          }
        >
          <Text color="dimmed" size="sm">
            MTimeline bullet as avatar image
          </Text>
        </MTimeline.Item>
        <MTimeline.Item title="Icon" bulletSize={24} bullet={<IconSun size="0.8rem" />}>
          <Text color="dimmed" size="sm">
            MTimeline bullet as icon
          </Text>
        </MTimeline.Item>
        <MTimeline.Item
          title="ThemeIcon"
          bulletSize={24}
          bullet={
            <ThemeIcon
              size={22}
              variant="gradient"
              gradient={{ from: 'lime', to: 'cyan' }}
              radius="xl"
            >
              <IconVideo size="0.8rem" />
            </ThemeIcon>
          }
        >
          <Text color="dimmed" size="sm">
            MTimeline bullet as ThemeIcon component
          </Text>
        </MTimeline.Item>
      </MTimeline>
    </Flex>
  )
}
