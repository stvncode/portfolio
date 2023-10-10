import { Badge, Flex, Image, Text } from '@mantine/core'
import { IconChevronRight } from '@tabler/icons-react'
import { CustomText } from 'components/Typography'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { WorksType } from '../Works.types'
import { useWorksDescriptionStyles } from './WorksDescription.styles'

interface WorksDescriptionLayoutProps {
    img: string
    title: string
    from: WorksType
    date: string
    link: string
    video?: string
}

export const WorksDescriptionLayout: FC<WorksDescriptionLayoutProps> = ({ img, title, from, date, link, children, video }) => {
    const navigate = useNavigate()

    const { classes } = useWorksDescriptionStyles()

    return (
        <Flex mt="xl" direction="column" gap={10} className={classes.container}>
            <Flex direction="column" gap={30} className={classes.container}>
                <Flex gap={5} align="center">
                    <Text mb={3} size="lg" weight="bolder" color="violet.7" className={classes.back} onClick={() => navigate(`/works#${from}`)}>Works</Text>
                    <IconChevronRight />
                    <CustomText mb={2} size="xl" align='center' weight="bold">{title}</CustomText>
                    <Badge ml={15} color="violet">{date}</Badge>
                </Flex>
            </Flex>
            {children}
            {video ?
                <Flex mt={25}>
                    <video height="336" controls style={{ width: '100%' }}>
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </Flex> :
                <Image
                    mt={25}
                    src={img}
                    height="21rem"
                    radius="lg"
                    className={classes.image}
                    onClick={() => window.open(link, '_blank')}
                />
            }
        </Flex>
    )
}
