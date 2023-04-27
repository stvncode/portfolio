import { FC } from 'react'
import { CustomText } from './CustomText'
import { useTypographyStyles } from './Typography.styles'

interface HomeTitleProps {
    title: string
}

export const HomeTitle: FC<HomeTitleProps> = ({ title }) => {
    const { classes } = useTypographyStyles()

    return (
        <CustomText underline weight="bold" size="xl" className={classes.underlineOffset}>{title}</CustomText>
    )
}
