import { Flex, Grid } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'
import { Section } from 'components/Section'
import { CustomText } from 'components/Typography'
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
            <CustomText size="lg" weight="bold">{title}</CustomText>
            <Section>
                <Grid gutter="xl">
                    {work.map((cw, i) =>
                        <Grid.Col key={i} span={width < 400 ? 12 : 6}>
                            <WorksCard {...cw} />
                        </Grid.Col>
                    )}
                </Grid>
            </Section>
        </Flex>
    )
}
