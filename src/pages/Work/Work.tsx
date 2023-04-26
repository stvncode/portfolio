import { Flex, Grid, Text } from '@mantine/core'
import { WorksCard } from 'features/Works'
import { companiesWorks } from 'features/Works/Works.utils'
import { useViewportSize } from '@mantine/hooks'
import { FC } from 'react'

export const Work: FC = () => {

    const { width } = useViewportSize()

    return (
        <Flex direction="column" gap={20}>
            <Flex direction="column" gap={10}>
                <Text size="lg" weight="bold">Companies work</Text>
                <Grid gutter="xl">{companiesWorks.map((cw, i) =>
                    <Grid.Col span={width < 400 ? 12 : 6}><WorksCard key={i} {...cw} /></Grid.Col>
                )}</Grid>
            </Flex>
        </Flex>
    )
}
