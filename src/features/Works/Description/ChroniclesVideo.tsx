import { Flex, Text } from '@mantine/core'
import { CustomText } from 'components/Typography'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { WorksCardType } from '../Works.types'
import { chroniclesVideoInfos } from './WorksDescription.utils'
import { WorksDescriptionInfos } from './WorksDescriptionInfos'
import { WorksDescriptionLayout } from './WorksDescriptionLayout'

export const ChroniclesVideo: FC<WorksCardType> = (work) => {
    const { title, img, from, date, link } = work

    const navigate = useNavigate()

    return (
        <WorksDescriptionLayout title={title} img={img} from={from} date={date} link={link}>
            <CustomText indent>
                In addition of <Text span component='a' color='violet.9' onClick={() => navigate('/works/chronicles-article')}
                    style={{ cursor: 'pointer' }}>Chronicles Article</Text>,
                I also had in my mind that I wanted to share what I did by recording my coding sessions of
                <Text span component='a' color='violet.9' onClick={() => navigate('/works/chronicles')}
                    style={{ cursor: 'pointer' }}> Chronicles</Text>.
                and editing it after to make a youtube video on every steps of the creation of the app.
            </CustomText>
            <CustomText indent>
                It was also my first time doing editing with Adobe premiere pro. I really enjoyed it, that was pretty straightforward and
                it was satisfying to see my work on a complete video at the end and to know that people will have access
                to this content for free.
            </CustomText>
            <Flex mt={25} direction="column" gap={10}>
                <WorksDescriptionInfos infos={chroniclesVideoInfos(link)} />
            </Flex>
        </WorksDescriptionLayout>
    )
}
