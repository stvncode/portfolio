import { createStyles } from '@mantine/core'

export const useAboutStyles = createStyles((theme) => {
    const handleDarkMode = theme.colorScheme === 'dark' ? theme.white : theme.black

    return {
        img: {
            border: `2px solid ${handleDarkMode}`,
            width: '100px',
            height: '100px',
            // display: 'inline-block',
            borderRadius: '60%',
            // overflow: 'hidden',
        }
    }
})