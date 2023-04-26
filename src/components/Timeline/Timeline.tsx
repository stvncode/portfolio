import { FC } from 'react'

import { useTimelineStyles } from './Timeline.styles'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { timelineItems } from './Timeline.utils'
import 'react-vertical-timeline-component/style.min.css'
import { useMantineColorScheme, useMantineTheme } from '@mantine/core'

export const Timeline: FC = () => {
  const { colorScheme } = useMantineColorScheme()
  const { cx, classes } = useTimelineStyles()
  const theme = useMantineTheme()

  const dark = colorScheme === 'dark'

  const redirect = (url: string) => {
    window.open(url, '_blank')
  }

  return (
    <VerticalTimeline lineColor={dark ? theme.white : theme.black}>
      {timelineItems.map((item, index) => (
        <div className={cx("vertical-timeline-element",classes.timelineElement)} key={index}>
        <VerticalTimelineElement
          date={item.date}
          dateClassName={classes.date}
          iconOnClick={() => redirect(item.website)}
          iconClassName={classes['icon']}
          contentStyle={{ background: dark ? theme.white : theme.black, color: dark ? theme.black : theme.white }}
          contentArrowStyle={{ color: dark ? theme.white : theme.black }}
          icon={<img src={item.icon} alt="icon" width={57} height={57} />}
        >
          <h3 className="vertical-timeline-element-title">{item.title}</h3>
          <p>{item.content}</p>
        </VerticalTimelineElement>
        </div>
      ))}
    </VerticalTimeline>
  )
}
