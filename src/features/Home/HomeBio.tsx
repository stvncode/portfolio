import { Flex, Grid, Text } from '@mantine/core'
import { HomeTitle } from 'components/Typography'
import { FC } from 'react'

export const HomeBio: FC = () => {
    return (
        <Flex direction="column" gap={20}>
            <HomeTitle title="Bio" />
            <Grid gutter='xs'>
                <Grid.Col span={1}>
                    <Text weight="bold">
                        1995
                    </Text>
                </Grid.Col>
                <Grid.Col span={10}>
                    <Text >
                        Born in Fougeres, France
                    </Text>
                </Grid.Col>
            </Grid>
            <Grid>
                <Grid.Col span={1}>
                    <Text weight="bold">
                        2018
                    </Text>
                </Grid.Col>
                <Grid.Col span={10}>
                    <Text >
                        Completed the Master's Program at ISEN (Institut Supérieur de l'Electronique et du Numérique) in Brest, France
                    </Text>
                </Grid.Col>
            </Grid>
            <Grid>
                <Grid.Col span={1}>
                    <Text weight="bold">
                        2018
                    </Text>
                </Grid.Col>
                <Grid.Col span={10}>
                    <Text >
                        Work-study at Orange, Rennes, France
                    </Text>
                </Grid.Col>
            </Grid>
            <Grid>
                <Grid.Col span={1}>
                    <Text weight="bold">
                        2019
                    </Text>
                </Grid.Col>
                <Grid.Col span={10}>
                    <Text >
                        Freelance at Feelingo, Lille, France
                    </Text>
                </Grid.Col>
            </Grid>
            <Grid>
                <Grid.Col span={1}>
                    <Text weight="bold">
                        2020
                    </Text>
                </Grid.Col>
                <Grid.Col span={10}>
                    <Text >
                        Fullstack developer at Libertrip, Lille, France
                    </Text>
                </Grid.Col>
            </Grid>
            <Grid>
                <Grid.Col span={1}>
                    <Text weight="bold">
                        2021
                    </Text>
                </Grid.Col>
                <Grid.Col span={10}>
                    <Text >
                        Lead Frontend at Conduktor, Lille, France
                    </Text>
                </Grid.Col>
            </Grid>
        </Flex >
    )
}
