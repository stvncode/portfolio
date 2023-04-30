import { Badge, Flex, Grid, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { CustomText } from 'components/Typography'
import { FC } from 'react'

export interface WorksDescriptionInfoProps {
    title: string
    description: string
    isLink?: boolean
}

export const WorksDescriptionInfo: FC<WorksDescriptionInfoProps> = ({ title, description, isLink }) => {
    const isMobile = useMediaQuery('(max-width: 767px)')

    return (
        <Grid >
            <Grid.Col span={2}>
                <CustomText weight="bold">
                    <Badge variant='gradient' radius="sm">{title}</Badge>
                </CustomText>
            </Grid.Col>
            <Grid.Col span={isMobile ? 12 : 10} mt={1}>
                <Text color={isLink ? 'violet.9' : undefined} component={isLink ? 'a' : 'div'}
                    href={isLink ? description : undefined} target={isLink ? "_blank" : undefined}>
                    {description}
                </Text>
            </Grid.Col>
        </Grid>
    )
}

export const WorksDescriptionInfos: FC<{ infos: WorksDescriptionInfoProps[] }> = ({ infos }) => (
    <Flex direction="column" gap={15}>
        {infos.map((element, i) => {
            const { title, description, isLink } = element

            return <WorksDescriptionInfo key={i} title={title} description={description} isLink={isLink} />
        })}
    </Flex>
)
