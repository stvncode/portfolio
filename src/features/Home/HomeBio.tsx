import { Flex, Grid } from '@mantine/core'
import { CustomText, HomeTitle } from 'components/Typography'
import { FC } from 'react'
import { homeBioElements } from './Home.utils'

const HomeBioCol: FC<{ year: number, description: string }> = ({ year, description }) => (
    <Grid>
        <Grid.Col span={1}>
            <CustomText weight="bold">
                {year}
            </CustomText>
        </Grid.Col>
        <Grid.Col span={10}>
            <CustomText >
                {description}
            </CustomText>
        </Grid.Col>
    </Grid>
)

export const HomeBio: FC = () => (
    <Flex direction="column" gap={20}>
        <HomeTitle title="Bio" />
        {homeBioElements.map((element, i) => <HomeBioCol key={i} year={element.year} description={element.description} />)}
    </Flex >
)