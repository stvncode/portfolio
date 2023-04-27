import { DefaultMantineColor, Flex, Loader, LoaderProps } from '@mantine/core'
import { FC } from 'react'
import { useLoaderStyles } from './Loader.styles'

interface CustomLoaderProps {
    fullScreen?: boolean
    color?: DefaultMantineColor
    variant?: LoaderProps['variant']
}

export const CustomLoader: FC<CustomLoaderProps> = ({ fullScreen, color }) => {
    const { classes } = useLoaderStyles()

    return (
        <Flex align="center" justify="center" className={fullScreen ? classes.container : ''}>
            <Loader color={color ?? "violet"} variant="bars" />
        </Flex>
    )
}
