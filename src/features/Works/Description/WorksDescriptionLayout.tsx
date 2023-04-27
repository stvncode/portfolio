import { Flex, Image, Text } from '@mantine/core'
import { FC } from 'react'
import { useWorksDescriptionStyles } from './WorksDescription.styles'

interface WorksDescriptionLayoutProps {
    img: string
    title: string
}

export const WorksDescriptionLayout: FC<WorksDescriptionLayoutProps> = ({ img, title }) => {
    const { classes } = useWorksDescriptionStyles()

    return (
        <Flex mt="xl" direction="column" gap={30} className={classes.container}>
            <Image src={img} height="21rem" radius="lg" />
            <Text size="xl" align='center' weight="bold">{title}</Text>
        </Flex>
    )
}
