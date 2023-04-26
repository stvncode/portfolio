import { Flex, Grid, Text } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'
import { FC } from 'react'
import { WorksCardType } from './Works.types'
import { WorksCard } from './WorksCard'

interface WorksCardsProps {
    work: WorksCardType[]
    title: string
}

export const WorksCards: FC<WorksCardsProps> = ({ title, work }) => {
    const { width } = useViewportSize()

    return (
        <Flex direction="column" gap={10}>
            <Text size="lg" weight="bold">{title}</Text>
            <Grid gutter="xl">
                {work.map((cw, i) =>
                    <Grid.Col span={width < 400 ? 12 : 6}>
                        <WorksCard key={i} {...cw} />
                    </Grid.Col>
                )}
            </Grid>
        </Flex>
    )
}
