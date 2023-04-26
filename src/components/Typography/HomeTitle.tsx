import { Text } from '@mantine/core'
import { FC } from 'react'
import { useTypographyStyles } from './Typography.styles'

interface HomeTitleProps {
    title: string
}

export const HomeTitle: FC<HomeTitleProps> = ({ title }) => {
    const { classes } = useTypographyStyles()

    return (
        <Text underline weight="bold" size="xl" className={classes.underlineOffset}>{title}</Text>
    )
}
