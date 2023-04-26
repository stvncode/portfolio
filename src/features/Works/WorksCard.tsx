import { Badge, Card, Group, Image, Text } from '@mantine/core'
import { FC } from 'react'
import { WorksCardType } from './Works.types'
import { useNavigate } from 'react-router-dom'
import { useWorksStyles } from './Works.styles'

export const WorksCard: FC<WorksCardType> = ({ img, title, description, on, link }) => {
    const navigate = useNavigate()

    const { classes } = useWorksStyles()

    return (
        <Card shadow="sm" padding="lg" radius="md" className={classes.card} withBorder onClick={() => navigate(link)}>
            <Card.Section>
                <Image
                    src={img}
                    height={130}
                    alt="img"
                />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>{title}</Text>
                <Badge color={on ? 'green' : 'red'} variant="light">
                    {on ? 'On' : 'Off'}
                </Badge>
            </Group>

            <Text size="sm" color="dimmed">
                {description}
            </Text>
        </Card>
    )
}
