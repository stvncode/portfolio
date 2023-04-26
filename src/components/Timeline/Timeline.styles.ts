import { createStyles } from '@mantine/core'

export const useTimelineStyles = createStyles((theme) => {
    const handleDarkMode = theme.colorScheme === 'dark' ? theme.white : theme.black

    return {
        date: {
            marginLeft: '.5rem',
            marginRight: '.5rem',
            color: handleDarkMode,
        },
        icon: {
            background: handleDarkMode,
            cursor: 'pointer',
        },
         timelineElement: {
            '& .vertical-timeline-element-icon': {
                boxShadow: 'none'
            },
            '& .vertical-timeline-element-content-arrow': {
                borderRight: `7px solid ${handleDarkMode}`
            }
         },
    }
})
