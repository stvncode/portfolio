import { Badge, Card, Group, Image } from '@mantine/core'
import { CustomText } from 'components/Typography'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useWorksStyles } from './Works.styles'
import { WorksCardType } from './Works.types'

export const WorksCard: FC<WorksCardType> = ({ img, title, description, on, id }) => {
    const navigate = useNavigate()

    const { classes } = useWorksStyles()

    return (
        <Card shadow="sm" padding="lg" radius="md" className={classes.card} withBorder onClick={() => navigate(id)}>
            <Card.Section>
                <Image
                    src={img}
                    height={130}
                    alt="img"
                />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
                <CustomText weight={500}>{title}</CustomText>
                <Badge color={on ? 'green' : 'red'} variant="light">
                    {on ? 'On' : 'Off'}
                </Badge>
            </Group>

            <CustomText size="sm" color="dimmed">
                {description}
            </CustomText>
        </Card>
    )
}
